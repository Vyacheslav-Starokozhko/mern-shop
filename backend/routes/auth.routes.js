const Router = require("express");
const {check, validationResult} = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = new Router();
const config = require('config');


router.post('/registration',
    [
        check('email', 'Uncorrect').isEmail(),
        check('password', 'Password must be longer tan 3 and shorter than 12').isLength({min: 3, max: 12}),
        check('password', 'Password must be longer tan 3 and shorter than 12').isLength({min: 3, max: 12})
    ],
    async (req, res) => {
        try {
            const errors = await validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: `Uncorrect request`, errors});
            }
            const {email, password} = req.body;

            const candidate = await User.findOne({email});
            if (candidate) {
                return res.status(400).json({message: `User with email ${email} already exist`});
            }
            const hashPassword = await bcrypt.hash(password, 5);
            const user = await new User({email, password: hashPassword});
            await user.save();
            return res.json({message: `User was created`});
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    })


router.post('/login',
    async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if (!user) {
                return res.status(404).json({message: `User not found`});
            }
            const isPassValid = bcrypt.compareSync(password, user.password)

            if (!isPassValid) {
                return res.status(400).json({message: `Invalid password`});
            }
            const token = jwt.sign({id: user.id},config.get("secretKey"),{expiresIn: "1h"});
            return res.json({
                token,
                user:{
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        } catch (e) {
            console.log(e);
            res.send({message: "Server error"});
        }
    })


module.exports = router;
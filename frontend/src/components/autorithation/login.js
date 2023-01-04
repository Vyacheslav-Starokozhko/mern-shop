import React, {useState} from 'react';
import './autorithation.scss';
import Input from "../utils/input";
import {login} from "../../actions/user";
import {useDispatch} from "react-redux";


const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
const dispatch = useDispatch();
    return (
        <div className="login">
            <h1>Login</h1>
            <Input type="text" placeholder="Email" setValue={setEmail} value={email}/>
            <Input type="password" placeholder="Password" setValue={setPassword} value={password}/>
            <button className="login__btn" onClick={()=> dispatch(login(email,password))}>Login</button>
        </div>
    );
};

export default Login;
import React, {useState} from 'react';
import './registration.scss';
import Input from "../utils/input";
import {registration} from "../../actions/user";


const Registration = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="registration">
            <h1>Registration</h1>
            <Input type="text" placeholder="Email" setValue={setEmail} value={email}/>
            <Input type="password" placeholder="Password" setValue={setPassword} value={password}/>
            <button className="registration__btn" onClick={() => registration(email, password)}>Войти</button>
        </div>
    );
};

export default Registration;
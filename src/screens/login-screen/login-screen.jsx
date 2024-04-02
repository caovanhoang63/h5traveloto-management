
import React, {useEffect, useState} from 'react';
import Textbox, {PasswordTextbox} from "../../components/textbox/textbox";
import logo from "../../assets/icons/logo.png";
import './login-screen.css';
import {PrimaryButton} from "../../components/button/button";
import app from "../../App";
import {authenticate} from "../../api/user_api";

const LoginScreen = () => {
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const userLogin = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        authenticate(userLogin).then((response) => {
            const data =  response.data.data
            localStorage.setItem("token", data.access_token.Token)
            console.log(data.access_token.Token)
        }).catch((error) => {
            const data = error.response.data
            console.log(data.message);
        });
    };

    const logo = require('../../assets/icons/logo-no-background.png');
    return (
        <div className="LoginScreenContainer">
            <div className="LoginScreenWrapper">
                <img className="LoginScreenLogo" src={logo} alt="logo"/>
                <div className="LoginScreenContent">
                    <h2 className="LoginScreenH2">Welcome Back</h2>
                    <form className="LoginScreenForm" onSubmit={handleSubmit}>
                        <Textbox id={"email"} classname="LoginScreenEmail" title="Email" placeHolder="Enter your email"/>
                        <Textbox id={"password"} classname="LoginScreenPassword" title="Password" placeHolder="Enter your password"/>
                        <div className="remembermeDiv">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={handleRememberMeChange}
                                />
                                Remember me
                            </label>
                        </div>
                        <PrimaryButton type={"submit"} >Login</PrimaryButton>
                    </form>

                </div>
                <p className="LoginScreenP">
                    Don't have an account? <a className="LoginScreenA"
                                              href="../signup-screen/signup-screen.jsx">Sign
                    Up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginScreen;
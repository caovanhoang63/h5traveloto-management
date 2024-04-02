
import React, { useState } from 'react';
import Textbox, {PasswordTextbox} from "../../components/textbox/textbox";
import logo from "../../assets/icons/logo.png";
import './signup-screen.css';
import {PrimaryButton} from "../../components/button/button";
import app from "../../App";

const LoginScreen = () => {
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here

    };
    const logo = require('../../assets/icons/logo-no-background.png');
    return (
        <div className="SignupScreenContainer">
            <div className="SignupScreenWrapper">
                <img className="SignupScreenLogo" src={logo} alt="logo"/>
                <div className="SignupScreenContent">
                    <h2 className="SignupScreenH2">Sign Up</h2>
                    <form className="SignupScreenForm" onSubmit={handleSubmit}>
                        <Textbox id={"fisrtname"} classname="SignupScreenFirstName" title="First Name"
                                 placeHolder="Enter your first name"/>
                        <Textbox id={"lastname"} classname="SignupScreenLastName" title="Last Name" placeHolder="Enter your last name"/>
                        <Textbox id={"email"} classname="SignupScreenEmail" title="Email" placeHolder="Enter your email"/>
                        <Textbox id={"password"} classname="SignupScreenPassword" title="Password" placeHolder="Enter your password"/>
                        <Textbox id={"confirmpassword"} classname="SignupScreenConfirmPassword" title="Confirm Password"
                                 placeHolder="Confirm your password"/>

                        <PrimaryButton type={"submit"}>Sign Up</PrimaryButton>
                    </form>
                </div>
                <p className="SignupScreenP">
                    Don't have an account? <a className="SignupScreenA"
                                              href="../signup-screen/signup-screen.jsx">Sign
                    Up</a>
                </p>
            </div>


        </div>
    );
};

export default LoginScreen;
/*

import React, { useState } from 'react';
import Textbox from "../../components/textbox/textbox";
import './signup-screen.css';
import logo from "../../assets/icons/logo.png";

const SignupScreen = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
    };
    const logo = require('../../assets/icons/logo-no-background.png');
    return (
        <div className="container">
            <div className="side-panel"></div>
            <div>
                <div className="logodiv">
                    <img src={logo} alt="logo"/>
                </div>

                <div className="content">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <Textbox classname="LOginfirstname" title="First Name" placeHolder="Enter your first name"/>
                        <Textbox classname="lastname" title="Last Name" placeHolder="Enter your last name"/>
                        <Textbox classname="email" title="Email" placeHolder="Enter your email"/>
                        <Textbox classname="password" title="Password" placeHolder="Enter your password"/>
                        <Textbox classname="confirmpassword" title="Confirm Password" placeHolder="Confirm your password"/>
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>
                        Already have an account? <a href="#">Login</a>
                    </p>
                </div>
            </div>

            <div className="side-panel"></div>
        </div>
    );
};

export default SignupScreen;*/


import React, { useState } from 'react';
import Textbox, {PasswordTextbox} from "../../components/textbox/textbox";
import logo from "../../assets/icons/logo.png";
import './signup-screen.css';

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
                    <h2 className="LoginScreenH2">Welcome Back</h2>
                    <h3 className="LoginScreenH3">Enter your email and password to access your account</h3>
                    <form className="LoginScreenForm" onSubmit={handleSubmit}>
                        <Textbox classname="SignupScreenFirstName" title="First Name"
                                 placeHolder="Enter your first name"/>
                        <Textbox classname="SignupScreenLastName" title="Last Name" placeHolder="Enter your last name"/>
                        <Textbox classname="SignupScreenEmail" title="Email" placeHolder="Enter your email"/>
                        <Textbox classname="SignupScreenPassword" title="Password" placeHolder="Enter your password"/>
                        <Textbox classname="SignupScreenConfirmPassword" title="Confirm Password"
                                 placeHolder="Confirm your password"/>
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
                        <button className="SignupScreenButton" type="submit">Sign In</button>
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
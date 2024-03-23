
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
                        <Textbox classname="firstname" title="First Name" placeHolder="Enter your first name"/>
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

export default SignupScreen;
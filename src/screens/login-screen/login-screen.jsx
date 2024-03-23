
import React, { useState } from 'react';
import Textbox from "../../components/textbox/textbox";
import './login-screen.css';
import logo from "../../assets/icons/logo.png";

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
        <div className="container">
            <div className="side-panel"></div>
            <div>
                <div className="logodiv">
                    <img src={logo} alt="logo"/>
                </div>

                <div className="content">
                    <h2>Welcome Back</h2>
                    <h3>Enter your email and password to access your account</h3>
                    <form onSubmit={handleSubmit}>
                        <Textbox title="Email" placeHolder="Enter your email"/>
                        <Textbox classname="passwordbox" title="Password" placeHolder="Enter your password"/>
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
                        <button type="submit">Sign In</button>
                    </form>
                    <p>
                        Don't have an account? <a href="../signup-screen/signup-screen.jsx">Sign Up</a>
                    </p>
                </div>
            </div>

            <div className="side-panel"></div>
        </div>
    );
};

export default LoginScreen;
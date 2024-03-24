
import React, { useState } from 'react';
import Textbox, {PasswordTextbox} from "../../components/textbox/textbox";
import logo from "../../assets/icons/logo.png";
import './login-screen.css';

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
        <div className="LoginScreenContainer">
            <div className="side-panel"></div>
            <div className="LoginScreenWrapper">
                <img className="LoginScreenLogo" src={logo} alt="logo"/>
                <div className="LoginScreenContent">
                    <h2 className="LoginScreenH2">Welcome Back</h2>
                    <h3 className="LoginScreenH3">Enter your email and password to access your account</h3>
                    <form className="LoginScreenForm" onSubmit={handleSubmit}>
                        <Textbox classname="LoginScreenEmail" title="Email" placeHolder="Enter your email"/>
                        <Textbox classname="LoginScreenPassword" title="Password" placeHolder="Enter your password"/>
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
                        <button className="LoginScreenButton" type="submit">Sign In</button>
                    </form>

                </div>
                <p className="LoginScreenP">
                    Don't have an account? <a className="LoginScreenA"
                                              href="../signup-screen/signup-screen.jsx">Sign
                    Up</a>
                </p>
            </div>


            <div className="side-panel"></div>
        </div>
    );
};

export default LoginScreen;
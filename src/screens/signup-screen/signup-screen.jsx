
import React, { useState } from 'react';
import Textbox from "../../components/textbox/textbox";
import './login-screen.css';

const SignupScreen = () => {
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
    };
    const logo = require('../../assets/icons/logo.png');
    return (
        <div className="container">

                <div className="logodiv">
                    <img className="logoimg" src={logo} alt="logo" />
                    <h1>H5TRAVELOTO</h1>
                </div>
                <h2>Welcome Back</h2>
                <h3>Enter your email and password to access your account</h3>
                <form onSubmit={handleSubmit}>
                    <Textbox title="Email" placeHolder="Enter your email" />
                    <Textbox classname="passwordbox" title="Password" placeHolder="Enter your password" />
                    <div>
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
                    Already have an account? <a href="../login-screen/login-screen.jsx">Login</a>
                </p>

            <div className="side-panel"></div>
        </div>
    );
};

export default SignupScreen;
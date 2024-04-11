import React, { useState } from 'react';
import Textbox, {PasswordTextbox} from "../../components/textbox/textbox";
import './signup-screen.css';
import {PrimaryButton} from "../../components/button/button";
import {Register, register} from "../../api/user_api";
import {useNavigate} from "react-router-dom";



const SignUpScreen = () => {
    const navigate = useNavigate()
    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.password.value !== e.target.confirm_password.value) {
            alert("password does not match!");
            return;
        }

        const userRegister = {
            first_name : e.target.first_name.value,
            last_name : e.target.last_name.value,
            email : e.target.email.value,
            password : e.target.password.value,
        }

        Register(userRegister).then((res)=>{
            alert("register success!")
            navigate("/login")
        }).catch( (error) => {
            const data = error.response.data
            console.log("message: ", data.message)
        })

    };

    const logo = require('../../assets/icons/logo-no-background.png');
    return (
        <div className="SignupScreenContainer">
            <div className="SignupScreenWrapper">
                <img className="SignupScreenLogo" src={logo} alt="logo"/>
                <div className="SignupScreenContent">
                    <h2 className="SignupScreenH2">Sign Up</h2>
                    <form className="SignupScreenForm" onSubmit={handleSubmit}>
                        <Textbox id={"first_name"} classname="SignupScreenFirstName" title="First Name"
                                 placeHolder="Enter your first name"/>
                        <Textbox id={"last_name"} classname="SignupScreenLastName" title="Last Name" placeHolder="Enter your last name"/>
                        <Textbox id={"email"} classname="SignupScreenEmail" title="Email" placeHolder="Enter your email"/>
                        <Textbox id={"password"} classname="SignupScreenPassword" title="Password" placeHolder="Enter your password"/>
                        <Textbox id={"confirm_password"} classname="SignupScreenConfirmPassword" title="Confirm Password"
                                 placeHolder="Confirm your password"/>

                        <PrimaryButton type={"submit"} size={"md"}>Sign Up</PrimaryButton>
                    </form>
                </div>
                <p className="SignupScreenP">
                    Already have an account?
                    <a className="SignupScreenA" href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignUpScreen;
import React, { useState } from "react";
import LoginStyles from "./login.module.css";
import MainLogo from "../../assets/images/Logo_Tasker.PNG";
import GoogleIcon from "../../assets/icons/Social Icons/Google/Original.svg";
import DividerText from "../../assets/icons/Divider Text.png";
import { Link } from "react-router-dom";
import LoginLogo from "../../assets/images/WhatsApp Image 2025-03-05 at 14.17.48_6854242c.jpg";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={LoginStyles.login_container}>
            <div className={LoginStyles.login_form_content}>
                <Link to='/'>
                    <img className={LoginStyles.logo_title} src={MainLogo} alt="Tasker Logo" />
                </Link>
                <h1 className={LoginStyles.login_title}>Welcome back  👋</h1>
                <p className={LoginStyles.login_heading}>We are happy to have you back</p>
                <p className={LoginStyles.login_link_para}>
                    Don't have an account? <Link className={LoginStyles.link} to="/register">Register</Link>
                </p>
                <form className={LoginStyles.login_form} method="post">
                    <div className={LoginStyles.input_group}>
                        <label className={LoginStyles.login_label}>Email:</label>
                        <br />
                        <input
                            className={LoginStyles.login_input}
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className={LoginStyles.input_group}>
                        <label className={LoginStyles.login_label}>Password:</label>
                        <br />
                        <div className={LoginStyles.password_wrapper}>
                            <input
                                className={LoginStyles.login_input}
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                className={LoginStyles.toggle_password}
                                onClick={togglePasswordVisibility}
                            >
                                <span className={showPassword ? LoginStyles.eye_open : LoginStyles.eye_closed}></span>
                            </button>
                        </div>
                    </div>
                    <Link to={"/forgotPassword"} className={LoginStyles.password}>Forgot Password?</Link>
                    <button type="submit" name="login" className={LoginStyles.login_btn}>
                        Login
                    </button>
                    <img src={DividerText} alt="Divider Text" className={LoginStyles.divider_text} />
                    <div className={LoginStyles.social_media_login_btns}>
                        <button className={LoginStyles.social_media_login_btn}>
                            <img className={LoginStyles.social_icon} src={GoogleIcon} alt="Google" />
                        </button>
                    </div>
                </form>
            </div>
            <div className={LoginStyles.login_logo}>
                <img src={LoginLogo} alt="Login Background" />
            </div>
        </div>
    );
}

export default Login;

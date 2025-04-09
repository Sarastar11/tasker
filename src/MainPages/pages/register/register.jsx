import React, { useState } from "react";
import RegisterStyles from "./register.module.css";
import MainLogo from "../../assets/images/Logo Tasker-R.PNG";
import GoogleIcon from "../../assets/icons/Social Icons/Google/Original.svg";
import LoginLogo from "../../assets/images/image 18.png";
import DividerText from "../../assets/icons/Divider Text.png";
import { Link } from "react-router-dom";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className={RegisterStyles.login_container}>
            {/* Image Section */}
            <div className={RegisterStyles.login_logo}>
                <img src={LoginLogo} alt="Login Logo" />
            </div>

            {/* Form Section */}
            <div className={RegisterStyles.login_form_content}>
                <Link to='/'>
                    <img className={RegisterStyles.logo_title} src={MainLogo} alt="Tasker Logo" />
                </Link>
                <h1 className={RegisterStyles.login_title}>Create your account with us</h1>
                <p className={RegisterStyles.login_heading}>
                    Already have an account? <Link className={RegisterStyles.link} to="/login">Login</Link>
                </p>

                <form className={RegisterStyles.login_form} method="post">
                    <div className={RegisterStyles.input_group}>
                        <label className={RegisterStyles.login_label}>Full Name:</label>
                        <br />
                        <input
                            className={RegisterStyles.login_input}
                            name="full_name"
                            type="text"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className={RegisterStyles.input_group}>
                        <label className={RegisterStyles.login_label}>Email:</label>
                        <br />
                        <input
                            className={RegisterStyles.login_input}
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className={RegisterStyles.input_group}>
                        <label className={RegisterStyles.login_label}>Password:</label>
                        <br />
                        <div className={RegisterStyles.password_wrapper}>
                            <input
                                className={RegisterStyles.login_input}
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                className={RegisterStyles.toggle_password}
                                onClick={togglePasswordVisibility}
                            >
                                <span className={showPassword ? RegisterStyles.eye_open : RegisterStyles.eye_closed}></span>
                            </button>
                        </div>
                    </div>
                    <div className={RegisterStyles.input_group}>
                        <label className={RegisterStyles.login_label}>Confirm Password:</label>
                        <br />
                        <div className={RegisterStyles.password_wrapper}>
                            <input
                                className={RegisterStyles.login_input}
                                name="confirm_password"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                            />
                            <button
                                type="button"
                                className={RegisterStyles.toggle_password}
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                <span className={showConfirmPassword ? RegisterStyles.eye_open : RegisterStyles.eye_closed}></span>
                            </button>
                        </div>
                    </div>
                    <p className={RegisterStyles.forgot_password}>
                        <input type="checkbox" className={RegisterStyles.checkbox} />
                        I’ve read and accepted <span className={RegisterStyles.policy_link}>Terms of use</span>
                    </p>
                    <p className={RegisterStyles.forgot_password}>
                        <input type="checkbox" className={RegisterStyles.checkbox} />
                        I’ve read and accepted <span className={RegisterStyles.policy_link}>The privacy policy</span>
                    </p>
                    <button type="submit" name="register" className={RegisterStyles.login_btn}>Sign Up</button>
                    <img src={DividerText} alt="Divider Text" className={RegisterStyles.divider_text} />

                    <div className={RegisterStyles.social_media_login_btns}>
                        <button className={RegisterStyles.social_media_login_btn}>
                            <img className={RegisterStyles.social_icon} src={GoogleIcon} alt="Google" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
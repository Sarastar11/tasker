import React from "react";
// import { Modal } from "react-bootstrap/Modal";
// import { Button } from "react-bootstrap/Button";
import './modals.css';

function ForgetPassword()
{
    return(
        <div className="modal_container">
            <div className="modal_content">
                <h2 className="modal_title">Forgot Password</h2>
                <p className="modal_description">Enter your Email ID for the verification process <br />We will send 6 digit for your Email</p>
                <div className="input_group">
                    <label className="login_label">Email:</label><br />
                    <input className="login_input" name="email" type="email" placeholder="Email"/>
                </div>
                <button className="modal_button">Continue</button>
            </div>
        </div>
    );
}
export default ForgetPassword;
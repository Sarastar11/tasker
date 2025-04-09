import React from "react";
// import { Modal } from "react-bootstrap/Modal";
// import { Button } from "react-bootstrap/Button";
import './modals.css';

function VerificationCode()
{
    return(
        <div className="modal_container">
            <div className="modal_content">
                <h2 className="modal_title">Enter the Code to continue</h2>
                <p className="modal_description">A Verification Code has been sent to <br />************@gmail.com</p>
                <div className="input_group">
                    <label className="login_label">Verification Code:</label><br />
                    <input className="login_input" name="verification_code" type="text" placeholder="Verification Code"/>
                </div>
                <button className="modal_button">Verify</button>
            </div>
        </div>
    );
}
export default VerificationCode;
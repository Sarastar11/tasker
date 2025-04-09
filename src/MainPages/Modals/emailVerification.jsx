import React from "react";
// import { Modal } from "react-bootstrap/Modal";
// import { Button } from "react-bootstrap/Button";
import './modals.css';

function EmailVerification()
{
    return(
        <div className="modal_container">
            <div className="modal_content" id="email_modal">
                <h2 className="modal_title">Success</h2>
                <p className="modal_description">Registeration Successful <br />Enter Verification has been sent to your Email.<br />Please Verify it.</p>
                {/* <div className="input_group">
                    <label className="login_label">Email:</label><br />
                    <input className="login_input" name="email" type="email" placeholder="Email"/>
                </div> */}
                <button className="modal_button" id="email_btn">Ok</button>
            </div>
        </div>
    );
}
export default EmailVerification;
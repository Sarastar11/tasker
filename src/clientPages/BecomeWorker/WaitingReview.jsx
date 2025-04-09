import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import review from "../assets/images/review.png";
import { useNavigate } from "react-router-dom";

export default function WaitingReview() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
        setShowModal(true);
    };
    const navigate = useNavigate();

    return (
        <div>
            {/* Continue Button */}
            <div className="d-flex justify-content-end mt-5">
                <Button
                    onClick={handleSubmit}
                    style={{
                        height: "38px",
                        width: "325px",
                        backgroundColor: "var(--greenFont)",
                        color: "white",
                        border: "none",
                        padding: "9px",
                        fontSize: "16px",
                        fontWeight: "400",
                        cursor: "pointer",
                        borderRadius: 0,
                    }}
                >
                    Continue
                </Button>
            </div>

            {/* Account Under Review Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center">
                    <div className="p-4">
                        {/* Review Icon */}
                        <img
                            src={review}
                            alt="Review Icon"
                            className="mb-3"
                            width={243}
                            height={132}
                        />

                        {/* Title */}
                        <h5><strong>Account under review</strong></h5>

                        {/* Description */}
                        <p>Please wait 3 - 5 days for your request information to be reviewed.</p>

                        {/* Button */}
                        <Button variant="success" onClick={() => navigate("/worker")}
                            style={{
                                width: 181,
                                borderRadius: 4,

                            }}
                        >
                            OK
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

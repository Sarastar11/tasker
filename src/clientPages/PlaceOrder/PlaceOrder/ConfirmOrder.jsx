import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import confirmOrder from "../../assets/images/confirmOrder.png";
import { useNavigate } from "react-router-dom";

export default function ConfirmOrder() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
        setShowModal(true);
    };
  const navigate = useNavigate();

  // Function to handle card click
  const handleClick = (service) => {
    navigate("/client/order-details", { state: { service} }); 
  };
    return (
        <div>
            {/* Continue Button */}
            <div className="d-flex justify-content-end mt-5">
                <Button
                    onClick={handleSubmit}
                    style={{
                        height: "61px",
                        width: "370px",
                        backgroundColor: "rgba(183, 183, 183, 1)",
                        color: "white",
                        border: "none",
                        padding: "9px",
                        fontSize: "24px",
                        fontWeight: "400",
                        cursor: "pointer",
                        borderRadius: "6px",
                    }}
                >
                    Confirm Order
                </Button>
            </div>

            {/* confirm Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center">
                    <div className="p-4">
                        {/*confirm Icon */}
                        <img
                            src={confirmOrder}
                            alt="confirmOrder Icon"
                            className="mb-3"
                            width={88}
                            height={88}
                        />

                        {/* Title */}
                        <h5><strong>Confirm Order</strong></h5>

                        {/* Description */}
                        <p>We are going to process your order as soon as you tap the `Place Order` button.</p>

                        {/* Button */}
                        <Button variant="success" onClick={() => {setShowModal(false); handleClick();}}
                            style={{
                                width: 181,
                                borderRadius: 4,

                            }}
                        >
                            Place Order
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

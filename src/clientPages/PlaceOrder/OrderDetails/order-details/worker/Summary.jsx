import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../../DeleteButton";

export default function Summary({ worker, serviceFee = 4.8 }) {
    const navigate = useNavigate();

    if (!worker) return null;

    const total = worker.price + serviceFee;

    // const handleConfirm = () => {
    //     navigate("/payment", { state: { amount: total } }); 
    // };
    const handleConfirm = () => {
        navigate("/client/confirm-worker", { state: { amount: total, worker: worker } });
    };
    return (
        <>
            {/* Header */}
            <div className="p-3 d-flex justify-content-between align-items-center mt-4" style={{ backgroundColor: "var(--greenBar)", height: 61 }}>
                <span style={{ fontSize: 24, fontWeight: 500 }}>Booked Services</span>
            </div>

            <div className="p-3 mt-3 d-flex flex-column gap-3 fs-4">

                <div className="d-flex justify-content-between">
                    <span>Service Fee</span>
                    <span>€ {serviceFee}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Offer Price</span>
                    <span>€ {worker.price}</span>
                </div>

                <div className="d-flex justify-content-between fw-bold border-top border-2 border-dark pt-4">
                    <span>Total:</span>
                    <span>€ {total.toFixed(2)}</span>

                </div>
                <div className='d-flex justify-content-end gap-3 mt-3 mb-5 align-items-center'>

                    {/* Delete order................... */}
                    <DeleteButton />
                    <Button
                        onClick={handleConfirm}
                        className='d-flex justify-content-center align-items-center'
                        style={{
                            height: "69px",
                            width: "370px",
                            backgroundColor: "var(--greenFont)",
                            color: "white",
                            border: "none",
                            padding: "0 24px 12px 24px",
                            fontSize: "24px",
                            fontWeight: "400",
                            cursor: "pointer",
                            borderRadius: 6,
                        }}
                    >
                        Confirm Worker
                    </Button>
                </div>
            </div>
        </>
    );
}
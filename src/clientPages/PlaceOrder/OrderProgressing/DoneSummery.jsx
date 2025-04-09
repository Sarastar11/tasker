import React from "react";
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import DeleteButton from "../OrderDetails/DeleteButton";

export default function DoneSummery({ worker, serviceFee = 4.8 }) {

    const total = worker.price + serviceFee;

    // const handleConfirm = () => {
    //     navigate("/payment", { state: { amount: total } }); 
    // };
    // const handleConfirm = () => {
    //     navigate("/complete", { state: { amount: total } });
    // };
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

                 
                </div>
            </div>
        </>
    );
}
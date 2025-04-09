import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import success from "../../../assets/images/success.png";
import { useNavigate } from "react-router-dom";

export default function SuccessModal({ show, handleClose,  worker, total  }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        navigate("/client/progress");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show, navigate]); 

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="text-center p-5">
        <img src={success} alt="Success" width="88" className="mb-3" />
        <h4 className="fw-bold">Success</h4>
        <span className="text-muted mt-5">Payment Successful.</span>
        <p className="text-muted mb-3">
          Please after finishing, go to order details to make it complete and rate the worker!
        </p>
        <Button
          style={{ width: 181, height: 38, fontSize: "16px" }}
          variant="success"
          onClick={() => navigate("/client/progress", { state: { amount: total, worker: worker  }} )} 
        >
          OK
        </Button>
      </Modal.Body>
    </Modal>
  );
}

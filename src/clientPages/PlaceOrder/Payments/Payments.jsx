import React, { useState } from "react";
import EPS from "./Payments/EPS";
import PayPal from "./Payments/PayPal";
import "./Payments.css";
import card from "../../assets/icons/paymentMethods/card.png";
import eps from "../../assets/icons/paymentMethods/EPS.svg";
import paypal from "../../assets/icons/paymentMethods/paypal-2.svg";
import sepa from "../../assets/icons/paymentMethods/SEPA.svg";
import bancontact from "../../assets/icons/paymentMethods/Bancontact.svg";
import klarna from "../../assets/icons/paymentMethods/klarna-svgrepo-com.svg";
import VisaCard from "./Payments/Card";
import Sepa from "./Payments/Sepa";
import Bancontact from "./Payments/Bancontact";
import Klarna from "./Payments/Klarna";
import { useLocation } from "react-router-dom";
import SuccessModal from "./Payments/SuccessModal";
import { Button } from "react-bootstrap";

const paymentMethods = [
  { image: card, id: "card", name: "Card" },
  { image: eps, id: "eps", name: "EPS" },
  { image: paypal, id: "paypal", name: "PayPal" },
  { image: sepa, id: "sepa", name: "SEPA Debit" },
  { image: bancontact, id: "bancontact", name: "Bancontact" },
  { image: klarna, id: "klarna", name: "Klarna" }
];

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case "card":
        return <VisaCard />;
      case "paypal":
        return <PayPal />;
      case "eps":
        return <EPS />;
      case "sepa":
        return <Sepa />;
      case "bancontact":
        return <Bancontact />;
      case "klarna":
        return <Klarna />;
      default:
        return null;
    }
  };
  const location = useLocation();
  const amount = location.state?.amount || 0;
  // modal
  const [showModal, setShowModal] = useState(false);

  const handlePayment = () => {
    setShowModal(true); // Show modal when Pay button is clicked
  };
  return (
    <div className="payment-container">
      {/* Payment Methods Section */}
      <div className="payment-methods">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            className={`payment-method-btn ${selectedMethod === method.id ? "active" : ""}`}
            onClick={() => setSelectedMethod(method.id)}
          >
            <img src={method.image} alt={method.name} className="payment-icon" />
            <span className="payment-text">{method.name}</span>
          </button>
        ))}
      </div>

      {/* Payment Form Section */}
      <div className="payment-form">{renderPaymentForm()}</div>

      {/* Pay Button */}
      <Button variant="primary" className="pay-button" onClick={handlePayment}>
        Pay € {amount.toFixed(2)}
      </Button>

      {/* Success Modal */}
      <SuccessModal show={showModal} handleClose={() => setShowModal(false)} worker={location.state?.worker} total={location.state?.total} />
    </div>
  );
};

export default Payment;

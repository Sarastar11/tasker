import React, { useState } from "react";
import "./OfferAccepted.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useOffers } from "../../../../Contexts/OfferContext";

const OfferAccepted = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { submittedPrice } = useOffers();
  const toggleAccepted = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="OfferAccepted  ">
      <div className="title d-flex justify-content-between">
        <h2>Booked Services</h2>
        <button
          className="btn"
          onClick={() => {
            toggleAccepted();
          }}
        >
          {isOpen ? (
            <FaChevronUp
              style={{
                color: "#BCBCBC",
                width: "24px",
                height: "24px ",
              }}
            />
          ) : (
            <FaChevronDown
              style={{
                color: "#BCBCBC",
                width: "24px",
                height: "24px ",
              }}
            />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="data">
          <div>
            <h3>Service Fee</h3>
            <p>&euro; 4.8</p>
          </div>
          <div>
            <h3>Offer Price</h3>
            <p>&euro; {submittedPrice}</p>
          </div>
          <hr />
          <div className="total">
            <h3>Total:</h3>
            <p>&euro; {parseFloat(submittedPrice) + 5}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferAccepted;

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Address from "./Address/Address";
import "./OrderDetails.css";
import { useOffers } from "../../../../Contexts/OfferContext";
import RateOrder from "./RateOrder/RateOrder";

const OrderDetails = () => {
  const [isDetailsOpen, setisDetailsOpen] = useState(true);
  const { status } = useOffers();
  const toggleDetails = () => {
    setisDetailsOpen(!isDetailsOpen);
  };
  return (
    <>
      <div className="OrderDetails">
        <div className="title d-flex justify-content-between">
          <h2>Order Details</h2>
          <button
            className="btn"
            onClick={() => {
              toggleDetails();
            }}
          >
            {isDetailsOpen ? (
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
      </div>
      {isDetailsOpen && (
        <>
          <div className="status block">
            <div className="statusDetails">
              <h3>Order Status</h3>
              <p>A new order has been created.</p>
            </div>
            <div className={`${status} statusDetails`}>
              <button>{status}</button>
            </div>
          </div>

          {status == "completed" && <RateOrder />}
          <Address />
        </>
      )}
    </>
  );
};

export default OrderDetails;

import React from "react";
import "./styles/SendOffer.css";
import "./styles/responsive.css";
import success from "../../../../../assets/images/congratsIcon.svg";
import { useOffers } from "../../../../../Contexts/OfferContext";

const SendOffer = ({ submittedPrice, setOffer }) => {
  const { setStatus } = useOffers();
  return (
    <div className="successfully">
      <div className="sent">
        <div className="offer">
          <div className="img">
            <img src={success} alt="" />
          </div>
          <h2>Your Offer has been sent to the client</h2>
          <p>Your Offer : {submittedPrice} EUR</p>
          <p>service fees : 5 EUR</p>
          <p>You will receive : {parseFloat(submittedPrice) + 5} EUR</p>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              setOffer(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setStatus("inprogress");
              setOffer(false);
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendOffer;

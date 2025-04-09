import React from "react";
import "./Address.css";
import { useOffers } from "../../../../../Contexts/OfferContext";

const Address = () => {
  const { status } = useOffers();
  const isDisabled = status === "pending";
  return (
    <div className="Address block d-block">
      <h3>Address</h3>
      {!isDisabled && <p> 125, 2nd street, Berliner Str. 19288</p>}

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6912.076925187411!2d30.991871380987554!3d29.978324609452503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1742182878565!5m2!1sen!2seg"
          width="100%"
          height="309"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* Transparent overlay to disable interaction */}
        {isDisabled && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "309px",
              background: "transparent",
              zIndex: 1,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Address;

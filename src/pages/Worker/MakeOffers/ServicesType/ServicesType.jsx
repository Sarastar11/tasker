import React from "react";
import pluming from "../../../../assets/images/Plumbing Work.svg";
import "./ServicesType.css";

const ServicesType = () => {
  return (
    <div className="servicesType block d-block">
      <h3>Service type</h3>

      <div className="services">
        <div className="singleCard">
          <div className="Servicecard">
            <img src={pluming} alt="" />
          </div>
          <p>Plumbing Work</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesType;

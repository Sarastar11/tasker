import React from "react";
import "./OrderAttach.css";
import attachment1 from "../../../../assets/images/Rectangle 2880.PNG";
import attachment2 from "../../../../assets/images/Rectangle 2881.PNG";
import attachment3 from "../../../../assets/images/Rectangle 2882.PNG";
import attachment4 from "../../../../assets/images/Rectangle 2883.PNG";
import attachment5 from "../../../../assets/images/Rectangle 2884.PNG";

const OrderAttach = () => {
  return (
    <div className="OrderAttach block d-block">
      <h3>Attachments</h3>

      <div className="attachment">
        <div className="singleCard">
          <img src={attachment1} alt="" />
        </div>
        <div className="singleCard">
          <img src={attachment2} alt="" />
        </div>
        <div className="singleCard">
          <img src={attachment3} alt="" />
        </div>
        <div className="singleCard">
          <img src={attachment4} alt="" />
        </div>
        <div className="singleCard">
          <img src={attachment5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OrderAttach;

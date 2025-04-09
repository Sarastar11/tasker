import React, { useState } from "react";
import "./RateOrder.css";
import { Button, Modal } from "react-bootstrap";
import rate from "../../../../../assets/images/Component.svg";
import StarRating from "../../../../../Components/ratingStars/RatingStars";

const RateOrder = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="rateOrder">
      <Button variant="success" onClick={handleShow}>
        rate your client
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="rate">
            <div className="sent">
              <div className="offer">
                <div className="img">
                  {" "}
                  <img src={rate} alt="" />
                </div>
                <h2>How was Your Experience</h2>
                <p>
                  Your feedback is really valuable to us, so whether you had a
                  fantastic or less-than-stellar experience, we'd really like to
                  hear about it.
                </p>
              </div>
              <div className="rating">
                <StarRating />
              </div>
              <div className="comment">
                <label htmlFor="comment">add comment</label>
                <textarea name="comment" id="comment"></textarea>
              </div>
              <div className="button">
                <button>Rate Client</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RateOrder;

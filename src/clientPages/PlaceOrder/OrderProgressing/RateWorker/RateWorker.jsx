import React, { useState } from "react";
import "./RateWorker.css";
import { Button, Modal } from "react-bootstrap";
import rate from "../../../assets/images/Component.svg";
import StarRating from "../../../ratingStars/RatingStars";
import { useNavigate } from "react-router-dom";



const RateWorkers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return (
    <div className=" ">
      <Button
        onClick={handleShow}

        style={{
          height: "61px",
          width: "209px",
          backgroundColor: "var(--greenFont)",
          color: "white",
          border: "none",
          fontSize: "24px",
          fontWeight: "400",
          cursor: "pointer",
          borderRadius: 6,
        }}
      >
        Rate Your Worker
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="rate">
            <div className="sent">
              <div className="offer">
                <div className="img">
                  {" "}
                  <img src={rate} alt="" />
                </div>
                <h2 className="mb-2">How was Your Experience</h2>
                <p>
                  Your feedback is really valuable to us, so whether you had a
                  fantastic or less-than-stellar experience, we'd really like to
                  hear about it.
                </p>
              </div>
              
                <StarRating />
             
              <div className="comment">
                <label htmlFor="comment">add comment</label>
                <textarea name="comment" id="comment"></textarea>
              </div>
              <div className="button">
                <button onClick={() => {
                  handleClose();
                  navigate("/client/home");
                }}>Rate Worker</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default RateWorkers;

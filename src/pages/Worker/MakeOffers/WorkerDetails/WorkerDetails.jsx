import React, { useState } from "react";
import "./styles/WorkerDetails.css";
import "./styles/responsive.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import avatar from "../../../../assets//images/Avatar.svg";
import Reviews from "../../Profile/reviews/Reviews";

const StarRating = ({ rating, outOf = 5 }) => {
  return (
    <span className="text-warning">
      {Array.from({ length: outOf }).map((_, index) => (
        <span key={index}>{index < rating ? "★" : "☆"}</span>
      ))}
    </span>
  );
};
const WorkerDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="WorkerDetails">
      <div className="title d-flex justify-content-between">
        <h2>Client</h2>
      </div>
      <Button variant="transparent" onClick={handleShow}>
        <div className="block">
          <div className="details d-flex">
            <img
              src={avatar}
              alt=""
              style={{ width: "56px", height: "56px", borderRadius: "50%" }}
            />
            <h3>Ah*** *****</h3>
          </div>
        </div>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="Workerinfo">
            <div className="data">
              <div className="img">
                <img src={avatar} alt="" />
              </div>
              <div className="profileDetails">
                <div className="name">
                  <h3>user name</h3>
                </div>
                <p>Private</p>
                <p>mail@domian.com</p>
                <p>(+20) 123 4567 890</p>
                <div className="rating">
                  <div className=" d-flex justify-content-between">
                    <p> Client Rating</p>
                    <div className="img">
                      <StarRating rating={4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Reviews />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WorkerDetails;

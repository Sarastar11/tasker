import React, { useState } from "react";
import "./WorkerOffer.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SendOffer from "./SendOffer/SendOffer";
import { useOffers } from "../../../../Contexts/OfferContext";
import SingleChat from "../../../Chats/SingleChat/SingleChat";
import { Button, Modal } from "react-bootstrap";

const WorkerOffer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isOffersOpen, setisOffersOpen] = useState(true);
  const { status, makeOffer, offer, setOffer, submittedPrice } = useOffers();
  const isDisabled = status === "inprogress";

  const toggleOffers = () => {
    setisOffersOpen(!isOffersOpen);
  };
  //using formik for submitting offer

  return (
    <div className="WorkerOffer">
      <div className="title d-flex justify-content-between ">
        <h2>Your Offer</h2>
        <button
          className="btn"
          onClick={() => {
            toggleOffers();
          }}
        >
          {isOffersOpen ? (
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
      {isOffersOpen && (
        <div className="status ">
          <form onSubmit={makeOffer.handleSubmit}>
            <div className="price  ">
              <label htmlFor="price" className="d-flex align-items-center">
                Price{" "}
                {makeOffer.touched.price && makeOffer.errors.price ? (
                  <p className="error-msg">{makeOffer.errors.price}</p>
                ) : null}
              </label>
              <input
                type="text"
                placeholder="&euro; 50 EUR"
                id="price"
                name="price"
                onChange={makeOffer.handleChange}
                onBlur={makeOffer.handleBlur}
                value={makeOffer.values.price}
                disabled={isDisabled}
              />
            </div>
            <div className="description">
              <label
                className="d-flex align-items-center"
                htmlFor="description"
              >
                Task Description
                {makeOffer.touched.description &&
                makeOffer.errors.description ? (
                  <p className="error-msg">{makeOffer.errors.description}</p>
                ) : null}
              </label>
              <input
                type="text"
                placeholder="Add Details"
                id="description"
                name="description"
                onChange={makeOffer.handleChange}
                onBlur={makeOffer.handleBlur}
                value={makeOffer.values.description}
                disabled={isDisabled}
              />
            </div>
            <div className="date-time">
              <div className="date">
                <label className="d-flex align-items-center" htmlFor="date">
                  Select Date
                  {makeOffer.touched.date && makeOffer.errors.date ? (
                    <p className="error-msg">{makeOffer.errors.date}</p>
                  ) : null}
                </label>
                <input
                  type={date ? "date" : "text"}
                  value={makeOffer.values.date}
                  id="date"
                  name="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                    makeOffer.handleChange(e);
                  }}
                  placeholder="Select Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    e.target.type = date ? "date" : "text";
                    makeOffer.handleBlur(e);
                  }}
                  disabled={isDisabled}
                />
              </div>
              <div className="time">
                <label className="d-flex align-items-center" htmlFor="time">
                  Select Time{" "}
                  {makeOffer.touched.time && makeOffer.errors.time ? (
                    <p className="error-msg">{makeOffer.errors.time}</p>
                  ) : null}
                </label>
                <input
                  type={time ? "time" : "text"}
                  value={makeOffer.values.time}
                  id="time"
                  name="time"
                  onChange={(e) => {
                    setTime(e.target.value);
                    makeOffer.handleChange(e);
                  }}
                  placeholder="Select Time"
                  onFocus={(e) => (e.target.type = "time")}
                  onBlur={(e) => {
                    e.target.type = time ? "time" : "text";
                    makeOffer.handleBlur(e);
                  }}
                  disabled={isDisabled}
                />
              </div>
            </div>
            <div className="btns">
              {/* <button className="chat" type="button">
              </button> */}
              <Button
                className="chat"
                type="button"
                variant="transparent"
                onClick={handleShow}
              >
                Chat With Client
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <SingleChat />
                </Modal.Body>
              </Modal>
              {status == "pending" && (
                <button className="offer" type="submit">
                  Make Offer
                </button>
              )}
            </div>
          </form>
        </div>
      )}
      {offer && (
        <SendOffer setOffer={setOffer} submittedPrice={submittedPrice} />
      )}
    </div>
  );
};

export default WorkerOffer;

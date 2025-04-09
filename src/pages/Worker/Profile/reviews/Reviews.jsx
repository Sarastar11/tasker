import React, { useState } from "react";
import avatar from "../../../../assets/images/Avatar (1).png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles/Review.css";
import "./styles/responsive.css";
import { Tab, Tabs } from "react-bootstrap";

const reviews = [
  {
    name: "Ah*** *****",
    review:
      "Fantastic job. Vitalii assembled the IKEA Nordli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk...",
    rating: 5,
  },
  {
    name: "Ah*** *****",
    review:
      "Fantastic job. Vitalii assembled the IKEA Nordli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk...",
    rating: 5,
  },
  {
    name: "Ah*** *****",
    review:
      "Fantastic job. Vitalii assembled the IKEA Nordli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk...",
    rating: 5,
  },
];

const Reviews = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleReviews = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="review">
      <div className="title d-flex justify-content-between">
        <h2>My Reviews</h2>
        <button
          className="btn"
          onClick={() => {
            toggleReviews();
          }}
        >
          {" "}
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
          <Tabs
            justify
            variant="underline"
            defaultActiveKey="Worker"
            className="mainTabs"
          >
            <Tab eventKey="Worker" title="As Worker">
              <div>
                <div className="mt-3">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="border-bottom py-3 d-flex align-items-start"
                    >
                      <img
                        src={avatar}
                        alt="profile"
                        className="rounded-circle me-3"
                      />
                      <div>
                        <h6 className="fw-bold">{review.name}</h6>
                        <p className="text-muted small">{review.review}</p>
                      </div>
                      <div className="ms-auto text-warning">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
            <Tab eventKey="Client" title="As Client">
              <div>
                <div className="mt-3">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="border-bottom py-3 d-flex align-items-start"
                    >
                      <img
                        src={avatar}
                        alt="profile"
                        className="rounded-circle me-3"
                      />
                      <div>
                        <h6 className="fw-bold">{review.name}</h6>
                        <p className="text-muted small">{review.review}</p>
                      </div>
                      <div className="ms-auto text-warning">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Reviews;

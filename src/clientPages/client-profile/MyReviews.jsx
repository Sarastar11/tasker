import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar2 from "../assets/images/Avatar2.png";

const reviews = [
    {
        id: 1,
        name: "Ah*** *****",
        text: "Fantastic job..Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
        avatar: Avatar2,
        rating: 3,
    },
    {
        id: 2,
        name: "Ah*** *****",
        text: "Fantastic job..Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
        avatar: Avatar2,
        rating: 5,
    },
    {
        id: 3,
        name: "Ah*** *****",
        text: "Fantastic job..Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
        avatar: Avatar2,
        rating: 4,
    },
];

const MyReviews = () => {
    return (
        <div className="mt-4">
            <div className="p-3 d-flex justify-content-between align-items-center"
                style={{
                    backgroundColor: 'var(--greenBar)',
                    height: 61,
                }}
            >
                <span style={{ fontSize: 24, fontWeight: 500 }}>My Reviews</span>
            </div>
            {/*  ...................reviews..................... */}
            {reviews.map((review) => (
                <div key={review.id} className="p-3 my-3 border-0 shadow-sm">
                    <Row className="">
                        <Row >
                            <Col xs="auto">
                                <img
                                    src={review.avatar}
                                    alt="User Avatar"
                                    className="rounded-circle"
                                    width={40}
                                    height={40}
                                />
                            </Col>
                            <Col>
                                <h6 className="fw-bold mt-2">{review.name}</h6>
                            </Col>
                            <Col xs="auto" className="text-warning">
                                <span style={{ fontSize: "20px" }}>
                                    {"★".repeat(review.rating)}</span>
                                    <span className="text-secondary opacity-25" style={{ fontSize: "20px" }}>
                                    {"★".repeat(5 - review.rating)}</span>
                            </Col>
                        </Row>
                        <Col>
                            <p className="mt-3 text-muted" style={{fontSize: 16}}>{review.text}</p>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );
};

export default MyReviews;
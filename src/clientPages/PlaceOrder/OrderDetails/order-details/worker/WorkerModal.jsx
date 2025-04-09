import React from "react";
import { Modal,Image,  Col, Row } from "react-bootstrap";
import { FaCalendarAlt, FaClock, FaEuroSign } from "react-icons/fa";

export default function WorkerModal({ show, handleClose, worker, workers }) {
    if (!worker) return null;

    return (
        <Modal show={show} onHide={handleClose} centered scrollable size="lg">

            <Modal.Body className=" px-4" >
                <div className="d-flex gap-3 align-items-center  pt-4 border-0">
                    <Image src={worker.image} width={163} height={154} className=" rounded" />
                    <div className="d-flex flex-column">
                        <h5>{worker.name}</h5>
                        <span className="text-muted">********</span>
                        <span className="text-muted"> ******@******</span>
                        <span className="text-muted"> *******</span>
                        <span className="text-muted fw-bold ">Worker Rating
                            <span className="text-warning ms-3" style={{ fontSize: "20px" }}>
                                {"★".repeat(worker.rating)}</span>
                            <span className="text-secondary opacity-25" style={{ fontSize: "20px" }}>
                                {"★".repeat(5 - worker.rating)}</span>
                        </span>

                    </div>
                </div>
                {/* .......................................................................................... */}
                {/* Header.................... */}
                <div className="p-3 mt-3 d-flex justify-content-between align-items-center"
                    style={{
                        backgroundColor: 'var(--greenBar)',
                        height: 61,
                    }}
                >
                    <span style={{ fontSize: 24, fontWeight: 500 }}>Offer</span>
                </div>
                {/* ............................................................................... */}
                {/* Price Section */}
                <div className="mb-3">
                    <p className="mt-4 mb-1 fs-5">Price</p>
                    <div className="d-flex align-items-center p-3 bg-light rounded border">
                        <FaEuroSign className="me-2 text-muted" />
                        <span className="text-muted">{worker.price}</span>
                    </div>
                </div>

                {/* Task Description Section */}
                <div className="mb-3 mt-4">
                    <p className="mt-3 mb-1 fs-5">Task Description</p>
                    <div className="p-3 bg-light rounded border text-muted">
                        fix kitchen plumbing and clogged sink
                    </div>
                </div>
                <div className="row">
                    {/* Date Section */}
                    <div className="col-md-6">
                        <p className="fw-bold mb-1">Date</p>
                        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded border">
                            <span className="text-muted">12-10-2025</span>
                            <FaCalendarAlt className="text-muted" />
                        </div>
                    </div>

                    {/* Time Section */}
                    <div className="col-md-6 mb-4">
                        <p className="fw-bold mb-1">Time</p>
                        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded border">
                            <span className="text-muted">3:00 pm</span>
                            <FaClock className="text-muted" />
                        </div>
                    </div>
                </div>
                {/* ............................................................... */}
                {/*about me Header.................... */}
                <div className="p-3 mt-3 d-flex justify-content-between align-items-center"
                    style={{
                        backgroundColor: 'var(--greenBar)',
                        height: 61,
                    }}
                >
                    <span style={{ fontSize: 24, fontWeight: 500 }}>About me</span>
                </div>
                {/* ............................... */}
                 <div className="mt-3 text-muted fw-bold">
                    <p>Details</p>
                    <p>Languages <span> </span></p>
                    <p>Services <span></span></p>
                    <p>Portfolio <span></span></p>
                 </div>




                {/* ...................................................................................................... */}
                {/* reviews header.................... */}
                <div className="p-3 mt-3 d-flex justify-content-between align-items-center"
                    style={{
                        backgroundColor: 'var(--greenBar)',
                        height: 61,
                    }}
                >
                    <span style={{ fontSize: 24, fontWeight: 500 }}>Reviews</span>
                </div>
                {/* ............................................................................... */}
                {/* reviews..section............................. */}
                {workers.map((worker) => (
                    <div key={worker.id} className="p-3 my-3 border-0 shadow-sm">
                        <Row >
                            <Row >
                                <Col xs="auto">
                                    <img
                                        src={worker.image}
                                        alt="User Avatar"
                                        className="rounded-circle"
                                        width={40}
                                        height={40}
                                    />
                                </Col>
                                <Col>
                                    <h6 className="fw-bold mt-2">{worker.name}</h6>
                                </Col>
                                <Col xs="auto" className="text-warning">
                                    <span style={{ fontSize: "20px" }}>
                                        {"★".repeat(worker.rating)}</span>
                                    <span className="text-secondary" style={{ fontSize: "20px" }}>
                                        {"★".repeat(5 - worker.rating)}</span>
                                </Col>
                            </Row>
                            <Col>
                                <p className="mt-3 text-muted" style={{ fontSize: 16 }}>{worker.review}</p>
                            </Col>
                        </Row>
                    </div>
                ))}
            </Modal.Body>
        </Modal>
    );
}

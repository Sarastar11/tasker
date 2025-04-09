import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaCalendarAlt, FaClock, FaEuroSign } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function WorkerConfirm() {
    const location = useLocation();
    const worker = location.state?.worker || 0;
    return (
        <Card className="p-3 mt-1" style={{ width: "100%", margin: "auto", height:"fit-content" }}>
            <span className="fs-4">Workers</span>
          <div className="d-flex gap-3 align-items-center  pt-3 border-0">
                    <Image src={worker.image} width={163} height={154} className=" rounded" />
                    <div className="d-flex gap-4">
                        <h5>{worker.name}</h5>
                        <div className="d-flex align-items-center">
                        <FaEuroSign className="me-2 text-muted" />
                        <span className="text-muted">{worker.price}</span>
                    </div>
                    </div>
                </div>
                {/* .......................................................................................... */}
               
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
        </Card>
    );
}
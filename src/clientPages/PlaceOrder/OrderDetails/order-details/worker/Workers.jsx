import React, { useState } from "react";
import { Card, ListGroup, Image, Form } from "react-bootstrap";
import WorkerModal from "./WorkerModal";
import Summary from "./Summary"; 
import Avatar from "../../../../assets/images/Avatar.png";
import Avatar2 from "../../../../assets/images/Avatar2.png";
import Avatar3 from "../../../../assets/images/Avatar3.png";

const workers = [
    { id: 1, name: "Mo*** *****", role: "Plumber", price: 80, review: "Fantastic job..Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
 image: Avatar,  rating: 5 },
   { id: 2, name: "Ah**** *****", role: "Plumber", price: 90 ,review: "Fantastic job..Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
  image: Avatar2,  rating: 3 },
   { id: 3, name: "Ma**** *****", role: "Plumber", price: 95, review: "Fantastic job..Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
  image: Avatar3,  rating: 4 },
];

export default function Workers() {
    const [selectedWorker, setSelectedWorker] = useState(workers[0]);
    const [modalShow, setModalShow] = useState(false);


    return (
        <div>
            {/* Header */}
            <div className="p-3 d-flex justify-content-between align-items-center mt-4" style={{ backgroundColor: "var(--greenBar)", height: 61 }}>
                <span style={{ fontSize: 24, fontWeight: 500 }}>Workers / Helper</span>
            </div>

            {/* Workers List */}
            <Card className="p-3 mt-3">
                <h5>Workers</h5>
                <ListGroup className="border-0">
                    {workers.map((worker) => (
                        <ListGroup.Item
                            key={worker.id}
                            className="d-flex align-items-center gap-3 border-0"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setSelectedWorker(worker);
                                setModalShow(true); 
                            }}
                        >
                            <Form.Check
                                type="radio"
                                name="worker"
                                checked={selectedWorker.id === worker.id}
                                onChange={() => setSelectedWorker(worker)}
                                className="me-2 border-success"
                            />
                            <Image src={worker.image} roundedCircle width={40} height={40} className="me-2" />
                            <div className="flex-grow-1 d-flex align-items-center">
                                <span style={{ fontWeight: "bold" }}>{worker.name}</span>
                                <span className="text-muted ms-3">{worker.role}</span>
                                <span className="ms-auto" style={{ fontWeight: "bold" }}>€ {worker.price}</span>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>

            {/* Worker Details Modal */}
            <WorkerModal show={modalShow} handleClose={() => setModalShow(false)} worker={selectedWorker} workers= {workers} />

            {/* Summary Component */}
            <Summary worker={selectedWorker} />
        </div>
    );
}

import React, { useState } from 'react';
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";

export default function Address() {
    const [street, setStreet] = useState("");
    const [postCode, setPostCode] = useState("");
    const [selectedCity, setSelectedCity] = useState(null);

    const cityOptions = [
        { value: "Berlin-Brandenburg", label: "Berlin-Brandenburg" },
        { value: "Hanover", label: "Hanover" },
        { value: "Hamburg", label: "Hamburg" },
    ];

    return (
        <div>
           {/* Header.................... */}
      <div className="p-3 d-flex justify-content-between align-items-center mt-5"
        style={{
          backgroundColor: 'var(--greenBar)',
          height: 61,
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 500 }}>Address Information</span>
      </div>
      {/* Form Inputs..................... */}
                <Row className="g-3 mt-3">
                    {/* Street Name & Number */}
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Street Name & Number *</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={street} 
                                onChange={(e) => setStreet(e.target.value)}
                                placeholder="Street name & Number"
                            />
                        </Form.Group>
                    </Col>

                    {/* Post Code */}
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Post Code *</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={postCode} 
                                onChange={(e) => setPostCode(e.target.value)}
                                placeholder="Post Code"
                            />
                        </Form.Group>
                    </Col>

                    {/* City Name */}
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>City Name *</Form.Label>
                            <Select
                                options={cityOptions}
                                value={selectedCity}
                                onChange={setSelectedCity}
                                placeholder="Search or Select"
                                isSearchable
                            />
                        </Form.Group>
                    </Col>
                </Row>
         
        </div>
    );
}

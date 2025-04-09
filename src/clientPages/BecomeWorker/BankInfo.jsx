import React from 'react';
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function BankInfo() {
  const [iban, setIban] = useState("");
  const [bankName, setBankName] = useState("");
  const [holderName, setHolderName] = useState("");

  // Validate IBAN (basic validation: remove non-numeric characters)
  const handleIbanChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setIban(value);
  };
  const handleHolderNameChange = (e) => {
    let value = e.target.value;

    // Allow only letters and spaces
    value = value.replace(/[^A-Za-z\s]/g, "");

    // Convert to title case (capitalize each word)
    value = value.replace(/\b\w/g, (char) => char.toUpperCase());

    setHolderName(value);
  };

  return (
    <div >
      {/* Header.................... */}
      <div className="p-3 d-flex justify-content-between align-items-center mt-5"
        style={{
          backgroundColor: 'var(--greenBar)',
          height: 61,
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 500 }}>Bank Information</span>
      </div>
      {/* Form Inputs..................... */}
     
        <Row className="g-3 mt-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>IBAN *</Form.Label>
              <Form.Control type="text" value={iban} onChange={handleIbanChange} placeholder="4515615556212352" maxLength={22} />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Bank Name *</Form.Label>
              <Form.Control type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} placeholder="sparkasse" />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Holder Name *</Form.Label>
              <Form.Control type="text" value={holderName} onChange={handleHolderNameChange} placeholder="Boto Hassan" />
            </Form.Group>
          </Col>
        </Row>
     

    </div>
  )
}

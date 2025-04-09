import React from "react";
import { Form, InputGroup, Container, Row, CardBody, Card } from "react-bootstrap";
import visaLogo from "../../../assets/icons/paymentMethods/VISA.svg";
import { Col } from "react-bootstrap";

export default function VisaCard() {
  return (
    <Container className="mt-4">
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold text-secondary">Card number</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="1234 1234 1234 1234"
            className="py-2"
            style={{ maxWidth: "100%", minWidth: "300px", borderRight: "none" }}
          />
          <InputGroup.Text className="bg-white border">
            <img src={visaLogo} alt="Visa" width="24px" height="16px" />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Row>
        {/* Expiry Date */}
        <Col xs={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold text-secondary">Expiry</Form.Label>
            <Form.Control type="text" placeholder="MM / YY" className="py-2" />
          </Form.Group>
        </Col>

        {/* CVC */}
        <Col xs={12} md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold text-secondary">CVC</Form.Label>
            <Form.Control type="text" placeholder="CVC" className="py-2" />
          </Form.Group>
        </Col>
      </Row>
      {/* Billing Address */}
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold text-secondary">Billing Address</Form.Label>
        <Form.Select className="py-2">
          <option>Germany</option>
          <option>United States</option>
          <option>France</option>
          <option>United Kingdom</option>
          <option>Canada</option>
        </Form.Select>
      </Form.Group>
      {/* checkbox............ */}
      <Card className="p-3 border">
        <Form.Check
          type="checkbox"
          id="saveInfo"
          label={
            <div>
              <strong>Save your info for secure 1-click checkout with Link</strong>
              <br />
              <span className="text-secondary">
                Pay faster at Tasker24 and thousands of businesses.
              </span>
            </div>
          }
        />
      </Card>
    </Container>
  );
}

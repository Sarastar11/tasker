import React from 'react';
import { Form, Container } from "react-bootstrap";

export default function EPS() {
  return (
    <Container className="mt-3">
      {/* Full Name Input */}
      <Form.Group className="mb-3">
        <Form.Control 
          type="text" 
          placeholder="Full name" 
          className="py-2" 
        />
      </Form.Group>

      {/* EPS Bank Dropdown */}
      <Form.Group>
        <Form.Select className="py-2">
          <option>EPS Bank</option>
          <option value="bank1">Bank 1</option>
          <option value="bank2">Bank 2</option>
        </Form.Select>
      </Form.Group>
    </Container>
  )
}

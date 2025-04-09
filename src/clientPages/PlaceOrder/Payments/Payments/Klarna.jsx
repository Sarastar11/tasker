import React from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Klarna() {
  return (
    <Container className='mt-4'>
         {/* E-mail Input */}
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Email"
          className="py-2"
        />
      </Form.Group>
      {/* country-select... */}
      <Form.Group className="mb-3 border p-2 rounded bg-white">
        <Form.Label className="fw-bold text-secondary bg-white ps-2">Country Or Region</Form.Label>
        <Form.Select className="py-2 border-0 fw-bold text-secondary">
            
          <option selected>الإمارات العربية المتحدة</option>
          <option>United States</option>
          <option>Germany</option>
          <option>France</option>
          <option>United Kingdom</option>
          <option>Canada</option>
        </Form.Select>
      </Form.Group>
      
    </Container>
  )
}

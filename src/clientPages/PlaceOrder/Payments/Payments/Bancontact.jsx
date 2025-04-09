import React from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Bancontact() {
  return (
    <Container className='mt-4'>
      {/* Full Name Input */}
      <Form.Group className="mb-3">
        <Form.Control 
          type="text" 
          placeholder="Full name" 
          className="py-2" 
        />
      </Form.Group>

    </Container>
  )
}

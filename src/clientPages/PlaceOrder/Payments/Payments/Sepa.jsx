import React from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap';
import bankIcon from '../../../assets/icons/paymentMethods/bank.svg';

export default function Sepa() {
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
      {/* E-mail Input */}
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Email"
          className="py-2"
        />
      </Form.Group>
      {/* IBAN Input */}
      <Form.Group className="mb-3">

        <InputGroup>
          <Form.Control type="text" placeholder="IBAN" className="py-2 border-end-0" />
          <InputGroup.Text className="bg-white border">
            <img src={bankIcon} alt="Bank" width="20px" height="20px" />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      {/* adress */}
      <Form.Group className="mb-3 border rounded p-2">
        <Form.Label className=" text-dark fs-5">Billing Address</Form.Label>
        {/* Country or Region */}
        <Form.Select className="py-2 mb-3">
          <option>United Arab Emirates</option>
          <option>United States</option>
          <option>Germany</option>
          <option>France</option>
          <option>United Kingdom</option>
        </Form.Select>

        {/* Address Line 1 */}
        <Form.Control type="text" placeholder="Address line 1" className="py-2 mb-3" />

        {/* Address Line 2 (Optional) */}
        <Form.Control type="text" placeholder="Address line 2 (optional)" className="py-2 mb-3" />

        {/* Emirate Dropdown */}
        <Form.Control type="text" placeholder="Emirate" className="py-2 mb-3" />

      </Form.Group>
    </Container>
  )
}

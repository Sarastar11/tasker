import React from 'react'
import { Form, Row, Col, Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import PhoneNumberInput from './CountryPhone';
import Identification from './Identification';
import ServicesAndLanguages from './ServicesAndLanguages';
import BankInfo from './BankInfo';
import Address from './Address';
import WaitingReview from './WaitingReview';

export default function Inputs() {
    return (
        <div>
            {/* Form Inputs */}
            <Form className="mt-4 mb-5">
                <Row className="g-3">
                    {/* Phone Number */}
                    <Col md={6}>
                        <PhoneNumberInput />
                    </Col>

                    {/* Tax Number */}
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Tax Number</Form.Label>
                            <Form.Control type="text" placeholder="Number" style={{ height: 59 ,width: 538}} />
                        </Form.Group>
                    </Col>
                </Row>
                {/* Identification */}
                <Row className='mt-2'>
                    <Identification />
                </Row>
                {/* About Me */}
                <Form.Group className="mt-4">
                    <Form.Label>About me *</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="About me"
                        height={109}
                        className="border rounded p-3"
                        style={{ resize: "none" }}
                    />
                </Form.Group>
                {/* services and languages........... */}
                <ServicesAndLanguages />
                {/* Bank Information */}
                <BankInfo />
                {/* Address */}
                <Address />
                {/* Submit Button */}

               <WaitingReview />



            </Form>
        </div>
    )
}

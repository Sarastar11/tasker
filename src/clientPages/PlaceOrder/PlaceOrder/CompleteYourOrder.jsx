import React from 'react'
import LocationAdress from './LocationAdress'
import { Form } from 'react-bootstrap'
import PhotoUpload from './PhotoUpload'
import PriceInput from './PriceInput'
import DateAndTime from './DateAndTime'
import ConfirmOrder from './ConfirmOrder'

export default function CompleteYourOrder() {
  
    return (
        <div className='mt-4 mb-5' >
            {/* Header.................... */}
            <div className=" d-flex flex-column align-items-start ps-3 pt-2 mb-3"
                style={{
                    backgroundColor: 'var(--greenBar)',
                    height: 78,
                }}
            >
                <span style={{ fontSize: 24, fontWeight: 500 }}>Complete Your Order</span>
                <p style={{ fontSize: 12, fontWeight: 400 }}>Fill in the details below to place your order quickly and easily</p>
            </div>
            {/* ............................................................................... */}
            <Form className="w-100" >
                <LocationAdress />
                {/* ...................add..details............................................... */}
                <Form.Group className="mt-4" style={{ maxWidth: "674px" }}>
                    <Form.Label>Add Details</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Add Details"
                        height={155}

                        className="border rounded p-3"
                        style={{ resize: "none" }}
                    />
                </Form.Group>
                {/* photo upload ......... */}
                <PhotoUpload />
                {/* price input............ */}
                <PriceInput />
                {/* date and time............. */}
                <DateAndTime />
                {/* submit button........... */}

                <ConfirmOrder />

            </Form>
        </div>
    )
}

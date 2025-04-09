import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function PriceInput() {
  const [price, setPrice] = useState("");

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers & decimal
    setPrice(value);
  };

  return (
    <Form.Group className="mb-3 mt-4" style={{ maxWidth: "674px" }}>
      <Form.Label>Price</Form.Label>
      <InputGroup>
      
        <Form.Control
          type="text"
          placeholder="€    33 EUR"
          value={price}
          onChange={handlePriceChange}
        />
        
      </InputGroup>
    </Form.Group>
  );
}

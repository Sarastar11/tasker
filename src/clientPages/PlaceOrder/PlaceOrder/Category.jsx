import React, { useState } from 'react';
import { Card } from "react-bootstrap";
import { useLocation} from 'react-router-dom';

export default function Category() {
    const location = useLocation();
    const { service, services = [] } = location.state || {};



const [selectedCards, setSelectedCards] = useState([{ id: 1, service: null, showDropdown: false }]);

const handleSelectService = (cardId, service) => {
    setSelectedCards((prevCards) => {
        return prevCards.map((card) =>
            card.id === cardId ? { ...card, service, showDropdown: false } : card
        );
    });

    setSelectedCards((prevCards) => {
        if (prevCards[prevCards.length - 1].service) {
            return [...prevCards, { id: Date.now(), service: null, showDropdown: false }];
        }
        return prevCards;
    });
};

const handleCardClick = (cardId) => {
    setSelectedCards((prevCards) =>
        prevCards.map((card) =>
            card.id === cardId && !card.service ? { ...card, showDropdown: true } : card
        )
    );
};

    return (
        <div>
            {/* Header */}
            <div className="p-3 d-flex justify-content-between align-items-center"
                style={{
                    backgroundColor: 'var(--greenBar)',
                    height: 61,
                }}
            >
                <span style={{ fontSize: 24, fontWeight: 500 }}>Category</span>
            </div>

            {/* Service Selection */}
            <div className="d-flex gap-3 justify-content-left mt-4 mb-0">
                {/* First Card - Display Service */}
                <div className='text-center'>
                    <Card className="text-center shadow-sm" style={{ width: "144px", height: "144px", cursor: "pointer" }}>
                        <Card.Body className="text-center d-flex justify-content-center align-items-center">
                            {service?.icon ? (
                                <img src={service.icon} alt={service.name} style={{ width: "80px", height: "80px" }} />
                            ) : (
                                <span className="text-secondary">No Image</span>
                            )}
                        </Card.Body>
                    </Card>
                    <p className="mb-0 mt-2 fs-6 fw-bold">{service?.name || "No Service Selected"}</p>
                </div>

                {/* Second Card - Clickable to Open Dropdown */}
                {/* <div>
                    {dropdownVisible && (
                        <select
                            onChange={handleChange}
                            value={selectedService ? selectedService.name : ""}
                            className="form-select mb-2"
                            autoFocus
                            onBlur={() => setDropdownVisible(false)} // Hide when clicking outside
                        >
                            <option value="" disabled>Select a service</option>
                            {services.map((service) => (
                                <option key={service.name} value={service.name}>
                                    {service.name}
                                </option>
                            ))}
                        </select>
                    )}

                    <Card
                        className="d-flex align-items-center justify-content-center shadow-sm "
                        style={{
                            width: "144px",
                            height: "144px",
                            cursor: "pointer",
                            border: "1px dashed gray",
                            position: "relative",
                            textAlign: "center"
                        }}
                        onClick={handleCardClick} 
                    >
                        {selectedService ? (
                            <>
                                <img src={selectedService.icon} alt={selectedService.name} style={{ width: "80px", height: "80px" }} />
                                <h6 className="mt-2">{selectedService.name}</h6>
                            </>
                        ) : (
                            <span className="text-secondary fs-1">+</span>
                        )}
                    </Card>
                </div> */}


<div className="d-flex gap-3 flex-wrap">
                {selectedCards.map((card) => (
                    <div key={card.id} 
                         className="border p-3 text-center d-flex align-items-center justify-content-center flex-wrap" 
                         style={{
                            width: "144px",
                            height: "144px",
                            cursor: "pointer",
                            border: "1px dashed gray",
                            position: "relative",
                            textAlign: "center",
                            borderRadius: "6px",
                        }} 
                         onClick={() => handleCardClick(card.id)}
                    >
                        {card.service ? (
                            <>
                                <img src={card.service.icon} alt={card.service.name} style={{ width: "80px", height: "80px" }} />
                                <h6 className="mt-2">{card.service.name}</h6>
                            </>
                        ) : (
                            <span className="text-secondary  fs-3 ">+</span>
                        )}

                        {/* Service Selection Dropdown (Appears on Click) */}
                        {card.showDropdown && !card.service && (
                            <select
                            style={{fontSize:"12px", padding:"4px 8px", width:"100%"}}
                                className="form-select d-flex justify-content-center align-items-baseline"
                                onChange={(e) => {
                                    const selectedService = services.find(s => s.name === e.target.value);
                                    handleSelectService(card.id, selectedService);
                                }}
                                defaultValue=""
                            >
                                <option value=""  disabled>Select a service</option>
                                {services.map((service) => (
                                    <option key={service.name} value={service.name}>{service.name}</option>
                                ))}
                            </select>
                        )}
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

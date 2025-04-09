import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import cancel from "../../assets/images/cancelOrder.png";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

export default function DeleteButton({ onSelect }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (option) => {
        setSelectedOption(option);
        if (onSelect) {
            onSelect(option);
        }
    };
    const navigate = useNavigate();
    const options = [
        { value: "no_longer_needed", label: "I no longer need the task" },
        { value: "schedule_changed", label: "My schedule has changed." },
        { value: "another_provider", label: "I have chosen another service provider" },
        { value: "mistake", label: "I made a mistake while creating the task" },
        { value: "other", label: "Other" },
    ];

    return (
        <>
            {/* Cancel Order Button */}
            <Button
                onClick={() => setShowModal(true)}
                className='d-flex justify-content-center align-items-center'
                style={{
                    height: "69px",
                    width: "177px",
                    border: "1px solid var(--greenFont)",
                    color: "var(--greenFont)",
                    backgroundColor: "white",
                    fontSize: "24px",
                    fontWeight: "400",
                    cursor: "pointer",
                    borderRadius: 6,
                }}
            >
                Cancel Order
            </Button>

            {/* Cancel Order Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center">
                    <div className="p-4">
                        {/* Cancel Icon */}
                        <img src={cancel} alt="Cancel Icon" className="mb-3" width={88} height={88} />

                        {/* Title */}
                        <h5><strong>Cancel Order</strong></h5>
                        <div className='text-start mt-4'>
                            {/* Dropdown Selection */}
                            <p>Select a reason for canceling order </p>
                            <Select
                                value={selectedOption}
                                onChange={handleChange}
                                options={options}
                                placeholder="Select "
                                isClearable
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        borderColor: "red",
                                        boxShadow: "none",
                                        "&:hover": { borderColor: "red" },
                                        backgroundColor: "white",
                                    }),
                                }}
                            />
                        </div>
                        {/* Delete Order Button */}
                        <Button
                            variant="danger"
                            onClick={() => {
                                navigate("/client/services")
                            }} style={{
                                width: 216,
                                height: 53,
                                borderRadius: 4,
                                marginTop: 16,
                            }}
                            disabled={!selectedOption}
                        >
                            Delete Order
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    );
}

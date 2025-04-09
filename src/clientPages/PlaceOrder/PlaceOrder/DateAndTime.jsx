import React, { useState, useRef, useEffect } from "react";
import { Form, InputGroup, Row, Col, Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clock from "../../assets/icons/clock.png";
import calendarIcon from "../../assets/icons/calendar-2.svg";

export default function DateAndTime() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState("As soon as possible");
    const [showDatePicker, setShowDatePicker] = useState(false);
    
    const datePickerRef = useRef(null); 

    //  dropdown 
    const handleSelect = (option) => {
        if (option === "Select a date") {
            setShowDatePicker(true);
        } else {
            setSelectedOption(option);
            setSelectedDate(null);
            setShowDatePicker(false);
        }
    };

    //  Close DatePicker when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setShowDatePicker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Row className="mb-3 mt-4  " style={{ maxWidth: "674px", position: "relative" }}>
            <Col md={6}>
                <Form.Label className="mb-1">Select Date</Form.Label>

                {/* Dropdown for Date Selection */}
                <Dropdown>
                    <Dropdown.Toggle as="div" className="form-control d-flex justify-content-between align-items-center bg-white p-2 border rounded">
                        <span>{selectedDate ? selectedDate.toLocaleDateString("en-GB") : selectedOption}</span>
                        
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-2 w-100 ">
                        <Dropdown.Item className="text-dark bg-white" onClick={() => handleSelect("As soon as possible")}>
                            As soon as possible
                        </Dropdown.Item>
                        <Dropdown.Item className="d-flex text-dark bg-white justify-content-between align-items-center" onClick={() => handleSelect("Select a date")}>
                        Select date <img src={calendarIcon} alt="calendar" width={20} height={20} />
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/* DatePicker (absolute position to avoid layout shift) */}
                {showDatePicker && (
                    <div 
                        ref={datePickerRef} 
                        className="position-absolute w-50 d-flex justify-content-center bg-white border rounded shadow"
                        style={{ zIndex: 1000, top: "70%", left: "20%" }}
                    >
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => {
                                setSelectedDate(date);
                                setSelectedOption(date.toLocaleDateString("en-GB"));
                                setShowDatePicker(false);
                            }}
                            inline
                        />
                    </div>
                )}
            </Col>

            {/* Time Picker */}
            <Col md={6}>
                <Form.Label className="mb-1">Select Time</Form.Label>
                <InputGroup className="input-time">
                    <DatePicker
                        selected={selectedDate}
                        onChange={(time) => setSelectedDate(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="hh:mm aa"
                        placeholderText="Select Time"
                        className="form-control time border-end-0 pb-1"
                    />
                    <InputGroup.Text className="bg-white border-start-0">
                        <img src={clock} alt="clock" width={20} height={20} />
                    </InputGroup.Text>
                </InputGroup>
            </Col>
        </Row>
    );
}

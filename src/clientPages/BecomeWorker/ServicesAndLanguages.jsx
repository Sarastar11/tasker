import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";

//  Language 
const languagesOptions = [
    { value: "en", label: "English" },
    { value: "de", label: "German" },
    { value: "ar", label: "Arabic" },
    { value: "fr", label: "French" },
    { value: "es", label: "Spanish" },
    { value: "it", label: "Italian" },
    { value: "ru", label: "Russian" },
    { value: "tr", label: "Turkish" },
    { value: "pt", label: "Portuguese" },
    { value: "zh", label: "Chinese" },
    { value: "ja", label: "Japanese" },
    { value: "hi", label: "Indian (Hindi)" },
    { value: "ur", label: "Urdu" },
    { value: "ku", label: "Kurdish" },
];

// Services 
const servicesOptions = [
    { value: "shopping", label: "Shopping" },
    { value: "cleaning", label: "Cleaning" },
    { value: "gardening", label: "Gardening" },
    { value: "locksmith", label: "Locksmith" },
    { value: "sanitary", label: "Sanitary" },
    { value: "mounting", label: "Mounting" },
    { value: "assembling", label: "Assembling" },
    { value: "electrical", label: "Electrical Work" },
    { value: "moving", label: "Moving Assistance" },
    { value: "painting", label: "Painting Work" },
    { value: "repairs", label: "Repairs in the House" },
    { value: "furniture", label: "Furniture Assembly" },
    { value: "online_service", label: "Online Service" },
    { value: "errands", label: "Errands" },
    { value: "regalmontage", label: "Regalmontage" },
    { value: "heavy_lifting", label: "Heavy Lifting" },
    { value: "others", label: "Others" },
    { value: "geriatric_care", label: "Geriatric Care" },
    { value: "delivery", label: "Delivery" },
    { value: "event", label: "Event" },
    { value: "translation", label: "Translation" },
    { value: "packaging", label: "Packaging" },
    { value: "pet_care", label: "Pet Care" }
];



const customStyles = {
    control: (provided) => ({
        ...provided,
        padding: "5px",
        borderRadius: "8px",
        borderColor: "#ccc",
        boxShadow: "none",
        "&:hover": { borderColor: "#aaa" },
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: "8px",
        padding: "5px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? "#f4f4f4" : "white",
        color: "#333",
        padding: "10px",
    }),
};

const ServicesAndLanguages = () => {
    return (
      
            <Row className="g-3 mt-4" style={{ maxWidth: "674px" }}>
                {/* Languages Dropdown  */}
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Select Language</Form.Label>
                        <Select
                            options={languagesOptions}
                            styles={customStyles}
                            isSearchable={true}
                            placeholder="Search for a language..."
                        />
                    </Form.Group>
                </Col>

                {/* Services Dropdown */}
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Select Services</Form.Label>
                        <Select
                            options={servicesOptions}
                            styles={customStyles}
                            isSearchable={true}
                            placeholder="Search for a service..."
                        />
                    </Form.Group>
                </Col>
            </Row>
      
    );
};

export default ServicesAndLanguages;

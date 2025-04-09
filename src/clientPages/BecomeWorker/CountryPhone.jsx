import { useState, useEffect } from "react";
import { Form, InputGroup, Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
// import countriesData from "../../MainPages/data/countryData";

const PhoneNumberInput = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    setCountries(countriesData);
    setSelectedCountry(countriesData[0]); // Default: Germany
  }, []);

  return (
    <Form.Group>
      <Form.Label>Phone Number</Form.Label>
      <InputGroup className="phone-input border rounded" style={{height:59, width: 438}}>
        {/* Country Selector */}
        <Dropdown>
          <Dropdown.Toggle className="country-dropdown border-0 bg-transparent">
            {selectedCountry && (
              <span className="d-flex align-items-center">
                <img src={selectedCountry.flag} alt={selectedCountry.name} width={24} height={16} />
                <span className="ms-2 fw-bold">{selectedCountry.code}</span>
                <FaChevronDown className="ms-2 text-secondary" size={8} />
              </span>
            )}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {countries.map((country, index) => (
              <Dropdown.Item key={index} onClick={() => setSelectedCountry(country)}>
                <img src={country.flag} alt={country.name} width={20} height={14} className="me-2" />
                {country.name} ({country.code})
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {/* Phone Number Input */}
        <Form.Control
          type="text"
          placeholder="Phone Number"
          className=" shadow-none"
        />
      </InputGroup>
    </Form.Group>
  );
};

export default PhoneNumberInput;

import React from "react";
import englishFlag from "../../../assets/icons/LanguageFlag.png";
import duetchFlag from "../../../assets/icons/DEflag.png";
import { Dropdown } from "react-bootstrap";

const Languages = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
          <img src={englishFlag} size={20} className="text-dark" />{" "}
          <span>EN</span>
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" style={{ width: "44px" }}>
          <Dropdown.Item className="language" to="/worker/profile">
            <img src={englishFlag} alt="" />
            <span>En</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="language">
            <img src={duetchFlag} alt="" />
            <span>Deu</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Languages;

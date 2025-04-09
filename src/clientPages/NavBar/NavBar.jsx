import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, InputGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotificationList from "./NotificationList"; // Import NotificationList
import './NavBar.css';
import logoTasker from '../assets/images/LogoTasker.png';
import Avatar from '../assets/images/Avatar.png';
import messages from '../assets/icons/messages.svg';
import LanguageFlag from '../assets/icons/LanguageFlag.png';
import logout from "../../assets/images/logout.svg";
import deleteProfile from "../../assets/images/profile-delete.svg";
import ChatsDropDown from "../../Components/Navbar/ChatsDropDown/ChatsDropDown";

const ClientNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showChats, setShowChats] = useState(false);
  return (
    <Navbar expand="lg" className="bg-white py-2 px-4 ">
      {/* Left Side - Logo */}
      <Navbar.Brand as={Link} to="/">
        <img src={logoTasker} alt="Logo" height={43} width={49} />
      </Navbar.Brand>

      {/* Navbar Toggle for Mobile */}
      <Navbar.Toggle aria-controls="navbar-nav " className="ms-auto" />

      <Navbar.Collapse id="navbar-nav">
        {/* Center - Navigation Links */}
        <Nav className="me-auto gap-3">
          <Nav.Link as={Link} to="/client/home" className="text-success">Home</Nav.Link>
          <Nav.Link as={Link} to="/client/services" className="text-success">Services</Nav.Link>
          <Nav.Link as={Link} to="/client/contactUs" className="text-success">Contact Us</Nav.Link>
        </Nav>

        {/* Center - Search Bar */}
        <Form className="d-flex mx-auto search-bar">
          <InputGroup>
            <FormControl type="search" placeholder="I want to hire a..." className="border-0 shadow-sm search" />
          </InputGroup>
        </Form>

        {/* Right Side - Icons */}
        <Nav className="d-flex align-items-center ms-auto gap-2">
          <Nav.Link as={Link} to="/client/chats"
          onMouseOver={() => {
            setShowChats(true);
          }}
          onMouseLeave={() => {
            setShowChats(false);
          }}
          >
             <ChatsDropDown showChats={showChats} />
            <img src={messages} size={20} className="text-dark" />
          </Nav.Link>

          {/*  NotificationList */}
          <NotificationList showDropdown={showDropdown} setShowDropdown={setShowDropdown} />

          <Nav.Link as={Link} to="/client/profile">

          <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                <img
                  src={Avatar}
                  alt="User"
                  className="rounded-circle"
                  width="24"
                  height="24"
                  drop={"none"}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <Dropdown.Item className="drop" to="/client/profile">
                  <span>My Profile</span>
                </Dropdown.Item>
                <hr />
                <Dropdown.Item href="#/action-2" className="drop">
                  <span>Logout</span> <img src={logout} alt="" />
                </Dropdown.Item>
                <hr />
                <Dropdown.Item href="#/action-3" className="drop">
                  <span>Remove Account</span> <img src={deleteProfile} alt="" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
          <Nav.Link>
            <img src={LanguageFlag} size={20} className="text-dark" /> <span className="ms-1">EN</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ClientNavbar;

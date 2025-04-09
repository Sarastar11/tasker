import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import logout from "../../assets/images/logout.svg";
import deleteProfile from "../../assets/images/profile-delete.svg";
import logoTasker from "../../assets/images/Logo.png";
import Avatar from "../../assets/images/Avatar.png";
import messages from "../../assets/icons/messages.svg";
import NotificationList from "./NotificationList";
import ChatsDropDown from "./ChatsDropDown/ChatsDropDown";
import Languages from "./Languages/Languages";

const WorkerNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showChats, setShowChats] = useState(false);

  return (
    <Navbar expand="lg" className="bg-white py-2 px-4">
      {/* Left Side - Logo */}
      <Navbar.Brand as={Link} to="/home">
        <img src={logoTasker} alt="Logo" height={43} width={49} />
      </Navbar.Brand>

      {/* Navbar Toggle for Mobile */}
      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
        {/* Center - Navigation Links */}
        <Nav className="me-auto gap-3">
          <Nav.Link as={Link} to="/home" className="text-success">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/services" className="text-success">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="text-success">
            Contact Us
          </Nav.Link>
        </Nav>

        {/* Center - Search Bar */}
        <Form className="d-flex mx-auto search-bar">
          <InputGroup>
            <FormControl
              type="search"
              placeholder="I want to hire a..."
              className="border-0 shadow-sm"
            />
          </InputGroup>
        </Form>

        {/* Right Side - Icons */}
        <Nav className="d-flex align-items-center">
          <Nav.Link
            as={Link}
            to="/chats"
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
          <NotificationList
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />

          <Nav.Link as={Link} to="/worker/profile">
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
                <Dropdown.Item className="drop" to="/worker/profile">
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
          <Languages />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default WorkerNavbar;

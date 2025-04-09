import React from "react";
import "./Edit.css";
import home from "../../../../../assets/images/Home.svg";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useEdit } from "../../../../../Contexts/EditInfoContext";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const {
    tempUserDetails,
    setTempUserDetails,
    defaultDetails,
    saveChanges,
    imagePreview,
    handleImageUpload,
  } = useEdit();
  const navigate = useNavigate();

  return (
    <>
      <div className="edit container">
        <div>
          <style>
            {`
          .breadcrumb {
            --bs-breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E");
          }
        `}
          </style>
          <div className="breadcrumb align-items-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <img src={home} alt="" />
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="/worker/profile" className="link-breadcrumb">
                    My Profile
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="/worker/profile" className="link-breadcrumb">
                    Edit Profile Information
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="title">
          <h2>Information</h2>
        </div>
        <div className="data">
          <Form style={{ width: "538px" }}>
            {/* Image Upload Field */}
            <Form.Group className="mt-3">
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2"
                  style={{
                    width: "100%",
                    maxHeight: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              )}
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Form.Group>
            {/* Multiple Selection */}
            <Form.Group className="mt-3 ">
              <Form.Label>Use</Form.Label>
              {["radio"].map((type) => (
                <div
                  key={`default-${type}`}
                  className="mb-3 d-flex justify-content-between"
                >
                  {defaultDetails.options.map((option, index) => (
                    <Form.Check
                      defaultChecked={defaultDetails.companyType === option}
                      key={index}
                      value={option}
                      type={type}
                      id={`default-${type}`}
                      label={option}
                    />
                  ))}
                </div>
              ))}
            </Form.Group>

            {/* Name Field */}
            {/* <Form.Group className="mt-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={tempUserDetails.name}
                                onChange={(e) => setTempUserDetails({ ...tempUserDetails, name: e.target.value })}
                            />
                        </Form.Group> */}

            {/* Email Field */}
            <Form.Group className="mt-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="text"
                value={tempUserDetails.email}
                onChange={(e) =>
                  setTempUserDetails({
                    ...tempUserDetails,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>

            {/* Phone Field */}
            <Form.Group className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={tempUserDetails.phone}
                onChange={(e) =>
                  setTempUserDetails({
                    ...tempUserDetails,
                    phone: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>

          <Button
            className="confirm"
            variant="success"
            onClick={() => {
              saveChanges;
              navigate("/worker/profile");
            }}
            disabled={
              !tempUserDetails.image ||
              !tempUserDetails.details ||
              !tempUserDetails.phone ||
              !tempUserDetails.email ||
              !tempUserDetails.companyType
            }
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};

export default Edit;

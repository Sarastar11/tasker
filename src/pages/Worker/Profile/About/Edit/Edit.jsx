import React from "react";
import "./Edit.css";
import home from "../../../../../assets/images/Home.svg";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useEdit } from "../../../../../Contexts/EditInfoContext";
import { BsPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const EditDetails = () => {
  const navigate = useNavigate();
  const { tempUserDetails, setTempUserDetails, defaultDetails, saveChanges } =
    useEdit();
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
                    Edit About Me
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="data">
          <Form>
            <Form.Group className="mt-3">
              <Form.Label>
                About Me <span className="error-msg">*</span>
              </Form.Label>
              <Form.Control
                as={"textarea"}
                rows={2}
                value={tempUserDetails.details}
                placeholder="About Me"
                onChange={(e) =>
                  setTempUserDetails({
                    ...tempUserDetails,
                    details: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>
                Languages <span className="error-msg">*</span>
              </Form.Label>
              <Form.Select
                value={tempUserDetails.language || ""}
                onChange={(e) =>
                  setTempUserDetails({
                    ...tempUserDetails,
                    language: e.target.value,
                  })
                }
              >
                <option value="">Select Language</option>
                {defaultDetails.languages.map((language, index) => (
                  <option key={index} value={language.name}>
                    {language.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>
                Services <span className="error-msg">*</span>
              </Form.Label>
              <Form.Select
                value={tempUserDetails.service || ""}
                onChange={(e) =>
                  setTempUserDetails({
                    ...tempUserDetails,
                    service: e.target.value,
                  })
                }
              >
                <option value="">Select Service</option>
                {defaultDetails.services.map((service, index) => (
                  <option key={index} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Portfolio Images</Form.Label>
              <div className="portfolios">
                {tempUserDetails.portfolio.map((image, index) => (
                  <div key={index} className="portfolio">
                    <img
                      style={{ width: "100px" }}
                      src={image}
                      alt="portfolio"
                      className="img-fluid rounded"
                    />
                    <Button
                      variant="transparent"
                      className="delete"
                      onClick={() => {
                        const updatedPortfolio =
                          tempUserDetails.portfolio.filter(
                            (_, i) => i !== index
                          );
                        setTempUserDetails({
                          ...tempUserDetails,
                          portfolio: updatedPortfolio,
                        });
                      }}
                    >
                      x
                    </Button>
                  </div>
                ))}
                <div className=" add d-flex align-items-center justify-content-center border rounded">
                  <Button
                    variant="light"
                    className=" d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      cursor: "pointer",
                      position: "relative",
                      borderRadius: "50%",
                    }}
                    onClick={() => document.getElementById("fileInput").click()} // Trigger File Input
                  >
                    <BsPlus size={24} style={{ color: "#00954E" }} />
                    <Form.Control
                      type="file"
                      id="fileInput"
                      style={{
                        position: "absolute",
                        opacity: 0,
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                      }}
                      onChange={(e) => {
                        if (e.target.files.length > 0) {
                          const fileURL = URL.createObjectURL(
                            e.target.files[0]
                          );
                          setTempUserDetails({
                            ...tempUserDetails,
                            portfolio: [...tempUserDetails.portfolio, fileURL], // Add Image to Portfolio
                          });
                          e.target.value = "";
                        }
                      }}
                    />
                  </Button>
                </div>
              </div>
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
              !tempUserDetails.cards ||
              !tempUserDetails.details ||
              !tempUserDetails.languages ||
              !tempUserDetails.portfolio ||
              !tempUserDetails.services
            }
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditDetails;

import "./Edit.css";
import { Button, Form } from "react-bootstrap";
import { useEdit } from "../../../Contexts/EditInfoContext";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import contact from "../../assets/images/contact.png";

const EditInfo = () => {
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
    <div className="edit container mb-5">
      {/* Header */}
      <div className="p-3 d-flex justify-content-between align-items-center"
        style={{ backgroundColor: 'var(--greenBar)', height: 61 }}
      >
        <span style={{ fontSize: 24, fontWeight: 500 }}>Information</span>
      </div>

      <div className="data">
        <Form style={{ width: "538px" }}>
          {/* Image Upload Field */}
          <Form.Group className="mt-3">
            <div className="d-flex flex-column align-items-center justify-content-start p-3 pb-5">
              <label className="cursor-pointer position-relative">
                <input type="file" className="d-none" onChange={handleImageUpload} />
                <div className="position-relative d-inline-block">
                  {/* Profile Image */}
                  <img
                    src={imagePreview || tempUserDetails.image || contact}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />

                  {/* edit Icon Button */}
                  <div
                    className="position-absolute bottom-0 end-0 rounded-circle d-flex justify-content-center align-items-center border border-light"
                    style={{
                      width: "66px",
                      height: "66px",
                      transform: "translate(-10%, -10%)",
                      marginTop: "100px",
                      backgroundColor: "rgba(234, 242, 255, 1)"
                    }}
                  >
                    <FaEdit className="fs-3" style={{ color: "rgba(180, 219, 255, 1)" }} />
                  </div>
                </div>
              </label>
            </div>
          </Form.Group>

          {/* Multiple Selection */}
          <Form.Group className="mt-3">
            <Form.Label>Use</Form.Label>
            <div className="d-flex flex-row gap-5 gap-md-1 justify-content-between ">
        {defaultDetails?.options?.map((option, index) => (
            <div key={index} className="d-flex align-items-center gap-2">
                <Form.Check
                    type="radio"
                    id={`companyType-${option}`}
                    label=""
                    name="companyType"
                    value={option}
                    checked={tempUserDetails.companyType === option}
                    onChange={(e) =>
                        setTempUserDetails({ ...tempUserDetails, companyType: e.target.value })
                    }
                    className="me-2"
                />
                <label htmlFor={`companyType-${option}`} className="mb-0">{option}</label>
            </div>
        ))}
    </div>
          </Form.Group>
          {/* Email Field */}
          <Form.Group className="mt-4">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="text"
              value={tempUserDetails.email}
              onChange={(e) =>
                setTempUserDetails({ ...tempUserDetails, email: e.target.value })
              }
            />
          </Form.Group>

          {/* Phone Field */}
          <Form.Group className="mt-4">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              value={tempUserDetails.phone}
              onChange={(e) =>
                setTempUserDetails({ ...tempUserDetails, phone: e.target.value })
              }
            />
          </Form.Group>
        </Form>

        {/* Confirm Button */}
        <Button
          className="confirm"
          variant="success"
          onClick={() => {
            saveChanges(tempUserDetails);  
            navigate("/client/profile");
          }}
          disabled={
            !tempUserDetails.name ||
            !tempUserDetails.email ||
            !tempUserDetails.phone ||
            !tempUserDetails.companyType
          }
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default EditInfo;

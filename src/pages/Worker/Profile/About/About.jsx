import edit from "../../../../assets/icons/edit.png";
import { useEdit } from "../../../../Contexts/EditInfoContext";
import "./about.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const { userDetails } = useEdit();

  return (
    <div className="about">
      {/* title */}
      <div
        className="p-3 d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "var(--greenBar)",
          height: 61,
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 500 }}>About Me</span>
        <button
          onClick={() => {
            navigate("/worker/editDetails");
          }}
          className="btn bg-light btn-sm d-flex align-items-center gap-2"
          style={{
            width: 75,
            height: 38,
            color: "var(--greenFont)",
          }}
        >
          <img src={edit} alt="edit" width={16} height={16} />
          Edit
        </button>
      </div>
      {/* data */}
      <div className="data">
        <p>{userDetails.details}</p>
        <div className="languages subtitle ">
          <p>languages</p>
          <div className="flags">
            {userDetails.languages.map((language, index) => (
              <div key={index} className="language-item">
                <img src={language.flag} alt={language.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="service subtitle">
          <p>services</p>
          <div className="flags">
            {userDetails.services.map((service, index) => (
              <div key={index} className="cards">
                <img src={service.image} alt={service.name} />
                <p>{service.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="portfolio subtitle">
          <p>portfolio</p>
          <div className="flags portfolio-imgs">
            {userDetails.portfolio.map((image, index) => (
              <img key={index} src={image} alt={`portfolio-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

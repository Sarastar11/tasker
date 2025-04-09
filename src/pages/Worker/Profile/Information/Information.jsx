import { Modal, Button, Form } from "react-bootstrap";
import edit from "../../../../assets/icons/edit.png";
import StarRating from "../../../../Components/ratingStars/RatingStars";
import { useNavigate } from "react-router-dom";
import { useEdit } from "../../../../Contexts/EditInfoContext";

const Information = () => {
  const { userDetails } = useEdit();
  const navigate = useNavigate();

  return (
    <div>
      {/* Info Bar */}
      <div
        className="p-3 d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "var(--greenBar)",
          height: 61,
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 500 }}>Information</span>
        <button
          onClick={() => {
            navigate("/worker/editInfo");
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

      {/* User Information Display */}
      <div className="mt-3 bg-white d-flex justify-content-between">
        <div className="d-flex gap-3">
          <img
            src={userDetails.image}
            alt="avatar"
            style={{
              width: 163,
              height: 154,
              borderRadius: 16,
              objectFit: "cover",
            }}
          />
          <div className="d-flex flex-column gap-2">
            <strong style={{ fontSize: 24, fontWeight: 700 }}>
              {userDetails.name}
            </strong>
            <div
              className="d-flex flex-column text-secondary"
              style={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              <p>{userDetails.companyType}</p>
              <p>{userDetails.email}</p>
              <p>{userDetails.phone}</p>
            </div>
          </div>
        </div>
        <div className="d-flex gap-2 justify-content-center">
          <p
            className="text-secondary"
            style={{
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Rating as client
          </p>
          <StarRating />
        </div>
      </div>
    </div>
  );
};

export default Information;

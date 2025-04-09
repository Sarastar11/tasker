import { useNavigate } from "react-router-dom";
import clock from "../../assets/icons/clock.png";

const NotificationItem = ({ title, message, time, color, icon }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/worker/makeOffer");
      }}
      className={`d-flex align-items-start p-3 border-bottom `}
      style={{
        height: 108,
        whiteSpace: "normal",
        wordWrap: "break-word",
        overflowWrap: "break-word",
        minWidth: 0,
      }}
    >
      <div
        className={`p-2  text-white me-3`}
        style={{
          width: "36px",
          height: "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `${color}`,
          borderRadius: 5,
        }}
      >
        <img src={icon} alt="icon" width={22} height={22} />
      </div>
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-2 text-dark">{title}</h6>
          <span className="small text-muted d-flex align-items-center gap-1">
            {" "}
            <img src={clock} width={15.9} height={15.9} alt="clock" /> {time}
          </span>
        </div>
        <p className="mb-0 text-muted small">{message}</p>
      </div>
    </div>
  );
};
export default NotificationItem;

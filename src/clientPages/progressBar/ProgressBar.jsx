import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import house from "../assets/icons/house.png";
import "./ProgressBar.css";

const BreadcrumbNav = () => {
  const location = useLocation();

  // Breadcrumb mappings (Static Paths)
  const breadcrumbMap = {
    "/client/profile": [
      { name: "Home", path: "/client/home" },
      { name: "My Profile", path: "/client/profile" },
    ],
    "/become-worker": [
      { name: "Home", path: "/" },
      { name: "Become a Worker", path: "/become-worker" },
    ],
    "/become-worker/project-details": [
      { name: "Home", path: "/" },
      { name: "Become a Worker", path: "/become-worker" },
      { name: "Project Details", path: "/become-worker/project-details" },
    ],
    "/client/place-order": [
      { name: "Home", path: "/client/home" },
      { name: "Services", path: "/client/services" },
      { name: "Place Order", path: "/client/place-order" },
    ],
    "/client/order-details": [
      { name: "Home", path: "/client/home" },
      { name: "My Profile", path: "/client/profile" },
      { name: "Order Details", path: "/client/order-details" },
    ],
    "/client/payment": [
      { name: "Home", path: "/client/home" },
      { name: "My Profile", path: "/client/profile" },
      { name: "Order Details", path: "/client/order-details" },
      { name: "Payment", path: "/client/payment" },
    ],
    "/client/editInfo": [
      { name: "Home", path: "/client/home" },
      { name: "My Profile", path: "/client/profile" },
      { name: "Edit Profile Information", path: "/client/editInfo" },
    ],
  };

  // Find the closest matching breadcrumb
  const matchedKey = Object.keys(breadcrumbMap).find((key) =>
    location.pathname.startsWith(key)
  );
  const breadcrumbs = breadcrumbMap[matchedKey] || [];

  return (
    <div
      style={{
        backgroundColor: location.pathname === "/client/payment" ? "rgba(247, 250, 252, 1)" : "white",
        paddingTop: location.pathname === "/client/payment" ? "40px" : "0px",
      }}
    >
      <Breadcrumb className="mb-0 mt-1 ps-4 container d-flex align-items-center">
        {breadcrumbs.map((item, index) => (
          <span key={index} className="d-flex align-items-center">
            {index > 0 && <span className="breadcrumb-separator ms-4 me-3">›</span>}

            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: item.path }}
              className="custom-breadcrumb text-muted"
              style={{ fontSize: "14px", fontWeight: "500" }}
            >
              {index === 0 ? (
                <img src={house} width={20} className="ms-5 house" alt="Home" />
              ) : (
                item.name
              )}
            </Breadcrumb.Item>
          </span>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;

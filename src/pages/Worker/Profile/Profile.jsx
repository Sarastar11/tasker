import React from "react";
import home from "../../../assets/images/Home.svg";
import Information from "./Information/Information";
import About from "./About/About";
import "./Profile.css";
import Orders from "./Orders/Orders";
import Reviews from "./reviews/Reviews";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="Profile container">
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
            </ol>
          </nav>
        </div>
      </div>
      <Information />
      <About />
      <Orders />
      <Reviews />
    </div>
  );
};

export default Profile;

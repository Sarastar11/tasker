import React from "react";
import home from "../../../assets/images/Home.svg";
import "./MakeOffer.css";
import ServicesType from "./ServicesType/ServicesType";
import OrderAttach from "./OrderAttach/OrderAttach";
import WorkerDetails from "./WorkerDetails/WorkerDetails";
import WorkerOffer from "./WorkerOffer/WorkerOffer";
import OrderDetails from "./OrderDetails/OrderDetails";
import OrderDate from "./OrderDate/OrderDate";
import Details from "./Details/Details";
import { Link } from "react-router-dom";
import { useOffers } from "../../../Contexts/OfferContext";
import OfferAccepted from "./OfferAccepted/OfferAccepted";

const MakeOffer = () => {
  const { status } = useOffers();
  return (
    <div className="container MakeOffer">
      <div>
        <style>
          {`
                .breadcrumb {
                  --bs-breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E");
                }
              `}
        </style>
        <div className="breadcrumb">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="link-breadcrumb">
                  <img src={home} alt="" />
                </Link>
              </li>
              <li className="breadcrumb-item " aria-current="page">
                <Link to="/worker/profile" className="link-breadcrumb">
                  My Profile
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/worker/makeOffer" className="link-breadcrumb">
                  OrderDetails
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <OrderDetails />
      <ServicesType />
      <OrderDate />
      <Details />
      <OrderAttach />
      <WorkerDetails />
      {status === "completed" ? <OfferAccepted /> : <WorkerOffer />}
    </div>
  );
};

export default MakeOffer;

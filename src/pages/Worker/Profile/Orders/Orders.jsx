import React from "react";
import "./Styles/Orders.css";
import "./Styles/responsive.css";
import { Tab, Tabs } from "react-bootstrap";
const workersAds = [
  {
    title: "Plumber needed for plumbing...",
    description: "Machine fitter needed. Machine fitter needed.",
    status: "Order Sent",
    offers: "60 $",
  },
  {
    title: "Plumber needed for plumbing...",
    description: "Machine fitter needed. Machine fitter needed.",
    status: "Order Sent",
    offers: "60 $",
  },
  {
    title: "Plumber needed for plumbing...",
    description: "Machine fitter needed. Machine fitter needed.",
    status: "Order Sent",
    offers: "60 $",
  },
];
const clientsAds = [
  {
    title: "Carpenter needed for repairing doors...",
    description: "Machine fitter needed. Machine fitter needed.",
    status: "Order Requested",
    offers: 2,
  },
  {
    title: "Carpenter needed for assembling drawer...",
    description: "Machine fitter needed. Machine fitter needed.",
    status: "Order Requested",
    offers: 2,
  },
  {
    title: "Plumber needed for plumbing...",
    description: "Machine fitter needed. Machine fitter needed.",
    status: "Order Requested",
    offers: 2,
  },
];

const Orders = () => {
  return (
    <div className="orders">
      <div className="title d-flex justify-content-between">
        <h2>Orders</h2>
      </div>
      <div className="data">
        <Tabs
          justify
          variant="underline"
          defaultActiveKey="Worker"
          className="mainTabs"
        >
          <Tab eventKey="Worker" title="As Worker">
            <Tabs
              justify
              variant="underline"
              defaultActiveKey="Offers"
              className=" subTab"
            >
              <Tab eventKey="Offers" title="Offers">
                <div>
                  {workersAds.map((ad, index) => (
                    <div
                      key={index}
                      className="border-bottom py-3 d-flex justify-content-between align-items-center"
                    >
                      <div className="offer">
                        <h6>{ad.title}</h6>
                        <p className="text-muted small">{ad.description}</p>
                      </div>
                      <div>
                        <p className="text-success">{ad.status}</p>
                        <p className="text-success">{ad.offers} Per Price</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="Active" title="Active">
                Active Orders
              </Tab>
              <Tab eventKey="Completed" title="Completed">
                Completed
              </Tab>
            </Tabs>
          </Tab>
          <Tab eventKey="Client" title="As Client">
            <Tabs
              justify
              variant="underline"
              defaultActiveKey="posts"
              className=" subTab"
            >
              <Tab eventKey="posts" title="Posted Ads">
                <div>
                  {clientsAds.map((ad, index) => (
                    <div
                      key={index}
                      className="border-bottom py-3 d-flex justify-content-between align-items-center"
                    >
                      <div className="offer">
                        <h6>{ad.title}</h6>
                        <p className="text-muted small">{ad.description}</p>
                      </div>
                      <div>
                        <p className="text-success">{ad.status}</p>
                        <p className="text-success">{ad.offers} Offers</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab>
              <Tab eventKey="Booked" title="Booked">
                Active Orders
              </Tab>
              <Tab eventKey="Completed" title="Completed">
                Completed
              </Tab>
            </Tabs>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Orders;

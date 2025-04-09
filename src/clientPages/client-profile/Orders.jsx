import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const adsData = [
    { id: 1, title: "Plumber needed for plumbing...", description: "Machine fitter needed. Machine fitter needed.", status: "Offer Requested", offers: 2 },
    { id: 2, title: "Plumber needed for plumbing...", description: "Machine fitter needed. Machine fitter needed.", status: "Offer Requested", offers: 2 },
    { id: 3, title: "Plumber needed for plumbing...", description: "Machine fitter needed. Machine fitter needed.", status: "Offer Requested", offers: 2 },
];

const Orders = () => {
    const [activeTab, setActiveTab] = useState("Posted Ads");

    return (
        <div >
            {/* Header.................... */}
            <div className="p-3 d-flex justify-content-between align-items-center"
                style={{
                    backgroundColor: 'var(--greenBar)',
                    height: 61,
                }}
            >
                <span style={{ fontSize: 24, fontWeight: 500 }}>Orders</span>
            </div>
            {/* Tabs................................ */}
            <ul className="nav nav-tabs border mt-3"
                style={{
                    width: 'fit-content',
                    borderRadius: 8,
                    height: 43,
                }}
            >
                {["Posted Ads", "Booked", "Completed"].map((tab) => (
                    <li  className={`nav-link ${activeTab === tab ? "active text-success border-bottom " : ""}`}
                    style={{cursor: "pointer", height: 43, paddingBottom:"10px", paddingTop:"5px" , border: "none" }}
                    onClick={() => setActiveTab(tab)} key={tab}
                    >
                            <p className="m-0 "
                                style={activeTab === tab ? { backgroundColor: "var(--greenBar)", borderRadius: "10px", padding:"2px 5px" } : { color: "black", padding: "3px 5px" }}
                            >
                                {tab}
                            </p>
                    </li>
                ))}
            </ul>

            {/* Content */}
            <div className="mt-4">
                {activeTab === "Posted Ads" && (
                    <div className="list-group">
                        {adsData.map((ad) => (
                            <div key={ad.id} className="list-group-item border-0 border-bottom py-3 d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-1">{ad.title}</h5>
                                    <p className="mb-1 text-secondary">{ad.description}</p>
                                </div>
                                <div className="text-end">
                                    <p className="text-success">{ad.status}</p>
                                    <small className="text-success">{ad.offers} Offers</small>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "Booked" && (
                    <p className="text-secondary text-center mt-4">No booked ads yet.</p>
                )}

                {activeTab === "Completed" && (
                    <p className="text-secondary text-center mt-4">No completed ads yet.</p>
                )}
            </div>
        </div>
    );
};

export default Orders;

import React, { useState } from "react";
import Avatar from "../../assets/images/Avatar.png";
import Avatar2 from "../../assets/images/Avatar2.png";
import Avatar3 from "../../assets/images/Avatar3.png";
import WorkerConfirm from '../OrderDetails/order-details/worker/WorkerConfirm';
import SummaryProgress from "./SummaryProgress";
import SummaryComplete from "./SummeryComplete";
import SummaryPending from "./SummeryPending";
import { useLocation } from "react-router-dom";

const workers = [
    { id: 1, name: "Mo*** *****", role: "Plumber", price: 80, review: "Fantastic job..Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
 image: Avatar,  rating: 5 },
   { id: 2, name: "Ah**** *****", role: "Plumber", price: 90 ,review: "Fantastic job..Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
  image: Avatar2,  rating: 3 },
   { id: 3, name: "Ma**** *****", role: "Plumber", price: 95, review: "Fantastic job..Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
  image: Avatar3,  rating: 4 },
];

export default function WorkerProgress() {
    const location = useLocation();
    const worker = location.state?.worker || 0;
    return (
        <div>
            {/* Header */}
            <div className="p-3 d-flex justify-content-between align-items-center mt-4" style={{ backgroundColor: "var(--greenBar)", height: 61 }}>
                <span style={{ fontSize: 24, fontWeight: 500 }}>Workers / Helper</span>
            </div>

            {/* Workers List */}
           <WorkerConfirm worker={worker} />

         
            {/* Summary Component */}
            <SummaryProgress worker={worker} />
        </div>
    );
}

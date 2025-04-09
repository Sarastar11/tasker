import React from "react";
import Avatar from "../../assets/images/Avatar.png";
import Avatar2 from "../../assets/images/Avatar2.png";
import Avatar3 from "../../assets/images/Avatar3.png";
import WorkerConfirm from '../OrderDetails/order-details/worker/WorkerConfirm';
import SummaryProgress from "./SummaryProgress";
import SummaryComplete from "./SummeryComplete";
import DoneSummery from "./DoneSummery";


export default function WorkerComplete({worker}) {
   

    return (
        <div>
            {/* Header */}
            <div className="p-3 d-flex justify-content-between align-items-center mt-4" style={{ backgroundColor: "var(--greenBar)", height: 61 }}>
                <span style={{ fontSize: 24, fontWeight: 500 }}>Workers / Helper</span>
            </div>

            {/* Workers List */}
           <WorkerConfirm worker={worker} />

         
            {/* Summary*/}
            <DoneSummery worker={worker} />
        </div>
    );
}
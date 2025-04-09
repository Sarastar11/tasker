import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import contact from '../assets/images/contact.png';
import Inputs from "./Inputs";

const ProfileForm = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="container">
            {/* Header */}
            <div className="p-3 d-flex justify-content-between align-items-center"
                style={{
                    backgroundColor: 'var(--greenBar)',
                    height: 61,
                }}
            >
                <span style={{ fontSize: 24, fontWeight: 500 }}>Information</span>
            </div>

            {/* Profile Image Upload */}
            <div className="d-flex flex-column align-items-center p-3 pb-5">
                <p className="mt-2 mb-3 small">Select Selfie Image</p>
                <label className="cursor-pointer position-relative ">
                    <input type="file" className="d-none" onChange={handleImageUpload} />
                    <div className="position-relative d-inline-block">
                        {/* Profile Image */}
                        <img
                            src={image || contact}
                            alt="Profile"
                            className="rounded-circle"
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />

                        {/* Camera Icon Button */}
                        <div
                            className="position-absolute bottom-0 end-0 rounded-circle d-flex justify-content-center align-items-center border border-light"
                            style={{
                                width: "66px",
                                height: "66px",
                                transform: "translate(-10%, -10%)",
                                marginTop: "100px",
                                backgroundColor: "rgba(234, 242, 255, 1)"
                            }}
                        >
                            <FaCamera className="fs-3" style={{ color: "rgba(180, 219, 255, 1)" }} />
                        </div>
                    </div>

                </label>
            </div>

            <Inputs />
        </div>
    );
};

export default ProfileForm;

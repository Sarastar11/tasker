import { useEffect } from "react";
import { useEdit } from "../../Contexts/EditInfoContext";
import { useNavigate } from "react-router-dom";
import edit from '../assets/icons/edit.png';

const Information = () => {
    const { setUserDetails, userDetails } = useEdit();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userDetails"));
        if (storedUser) {
            setUserDetails(storedUser);
        }
    }, [setUserDetails]);  

    if (!userDetails) {
        return <p>Loading...</p>; 
    }

    return (
        <div>
             {/* Info Bar */}
             <div className="p-3 d-flex justify-content-between align-items-center"
                style={{
                    backgroundColor: 'var(--greenBar)',
                    height: 61,
                }}
            >
                <span style={{ fontSize: 24, fontWeight: 500 }}>Information</span>
                <button onClick={() => {
                    navigate("/client/editInfo");
                }} className="btn bg-light btn-sm d-flex align-items-center gap-2"
                    style={{
                        width: 75,
                        height: 38,
                        color: 'var(--greenFont)',
                    }}
                >
                    <img src={edit} alt="edit" width={16} height={16} />
                    Edit
                </button>
            </div>


            {/* User Information Display */}
            <div className="mt-3 bg-white d-flex justify-content-between flex-wrap">
                <div className="d-flex gap-3">
                    <img 
                        src={userDetails.image || "default-avatar.png"} 
                        alt="avatar"
                        style={{ width: 163, height: 154, borderRadius: 16, objectFit: "cover" }}
                    />
                    <div className="d-flex flex-column gap-2 flex-wrap">
                        <strong style={{ fontSize: 24, fontWeight: 700 }}>
                            {userDetails.name || "N/A"}
                        </strong>
                        <div className="d-flex flex-column text-secondary " style={{ fontSize: 16, fontWeight: 500 }}>
                            <p>{userDetails.companyType || "N/A"}</p>
                            <p>{userDetails.email || "N/A"}</p>
                            <p>{userDetails.phone || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Information;

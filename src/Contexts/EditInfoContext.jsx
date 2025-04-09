/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";
import english from "../assets/images/englishFlag.svg";
import german from "../assets/images/germanFlag.svg";
import card1 from "../assets/images/service card.svg";
import card2 from "../assets/images/service card2.svg";
import card3 from "../assets/images/service card3.svg";
import portfolio1 from "../assets/images/Rectangle 2880.png";
import portfolio2 from "../assets/images/Rectangle 2881.png";
import portfolio3 from "../assets/images/Rectangle 2882.png";
import portfolio4 from "../assets/images/Rectangle 2883.png";
import profile from "../assets/images/Avatar.png";
const EditContext = createContext();

export const EditProvider = ({ children }) => {
  // Default values (can be changed)
  const defaultDetails = {
    name: "User Name",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    companyType: "Company",
    image: profile,
    details: "Details",
    options: ["Company", "Private"],
    cards: [card1, card2, card3],
    portfolio: [portfolio1, portfolio2, portfolio3, portfolio4],
    languages: [
      { name: "English", flag: english },
      { name: "German", flag: german },
    ],
    services: [
      { name: "Repairing", image: card1 },
      { name: "Plumber", image: card2 },
      { name: "Delivery", image: card3 },
    ],
    rating: 4,
  };

  // State Variables
  const [userDetails, setUserDetails] = useState(defaultDetails);
  const [tempUserDetails, setTempUserDetails] = useState(defaultDetails);
  const [imagePreview, setImagePreview] = useState(null);

  // Load saved data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userDetails"));
    if (storedUser) {
      setUserDetails(storedUser);
    }
  }, []);

  const openEdit = () => {
    setTempUserDetails(userDetails);
  };

  const saveChanges = (updatedDetails) => {
    localStorage.setItem("userDetails", JSON.stringify(updatedDetails));  
    setUserDetails(updatedDetails);  
};


const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
          const newImage = reader.result;  
          setTempUserDetails({ ...tempUserDetails, image: newImage });
      };
      reader.readAsDataURL(file);
  }
};

  return (
    <EditContext.Provider
      value={{
        defaultDetails,
        userDetails,
        setUserDetails,
        tempUserDetails,
        setTempUserDetails,
        openEdit,
        saveChanges,
        imagePreview,
        setImagePreview,
        handleImageUpload,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};
export function useEdit() {
  return useContext(EditContext);
}

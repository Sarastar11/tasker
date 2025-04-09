import { useState, useEffect } from "react";
import {  MdStarRate} from "react-icons/md";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Load rating from localStorage when the component mounts
  useEffect(() => {
    const savedRating = localStorage.getItem("userRating");
    if (savedRating) {
      setRating(parseInt(savedRating));
    }
  }, []);

  // Save rating to localStorage when it changes
  const handleRating = (starValue) => {
    setRating(starValue);
    localStorage.setItem("userRating", starValue);
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <MdStarRate
            key={index}
            size={18}
            className="cursor-pointer transition-all duration-200"
            color={starValue <= (hover || rating) ? "#FFD700" : "#D1D5DB"}
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(rating)}
          />
        );
      })}
    </div>
  );
};
export default StarRating;

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = (numberOfStars: number = 5) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex: number) {}

  function handleMouseEnter(getCurrentIndex: number) {}

  function handleMouseLeave(getCurrentIndex: number) {}

  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};
export default Rating;

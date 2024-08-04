import { useState } from "react";
import { FaStar } from "react-icons/fa";
type RatingProps = {
  numberOfStars: number;
};

const Rating = ({ numberOfStars }: RatingProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex: number) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex: number) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};
export default Rating;

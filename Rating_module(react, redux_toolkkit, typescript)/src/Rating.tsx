import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./features/store";
import { setRating, setHover } from "./features/ratingSlice";
import "./index.css";

type RatingProps = {
  numberOfStars: number;
};

const Rating = ({ numberOfStars }: RatingProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const rating = useSelector((state: RootState) => state.rating.rating);
  const hover = useSelector((state: RootState) => state.rating.hover);

  function handleClick(getCurrentIndex: number) {
    dispatch(setRating(getCurrentIndex));
  }

  function handleMouseEnter(getCurrentIndex: number) {
    dispatch(setHover(getCurrentIndex));
  }

  function handleMouseLeave() {
    dispatch(setHover(rating));
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

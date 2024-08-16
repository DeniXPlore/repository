import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./features/hooks";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { fetchImages, handleNextSlide, handlePreviousSlide, setCurrentSlide } from "./features/imageSliderSlice";

type ImageSliderProps = {
  url: string;
  limit?: number;
  page?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ url, limit = 5, page = 1 }) => {
  const dispatch = useAppDispatch();
  const { images, currentSlide, loading, errorMsg } = useAppSelector((state) => state.imageSlider);

  useEffect(() => {
    if (url) {
      dispatch(fetchImages(`${url}?page=${page}&limit=${limit}`));
    }
  }, [url, dispatch, page, limit]);

  if (loading) return <div>Loading...</div>;
  if (errorMsg) return <div>{errorMsg}</div>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={() => dispatch(handlePreviousSlide())} className="arrow arrow-left" />
      {images && images.length > 0 &&
        images.map((imageItem, index) => (
          <img
            key={imageItem.id}
            src={imageItem.download_url}
            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            alt="Slide"
          />
        ))}
      <BsArrowRightCircleFill onClick={() => dispatch(handleNextSlide())} className="arrow arrow-right" />
      <span className="circle-indicators">
        {images && images.length > 0 &&
          images.map((_, index) => (
            <button
              key={index}
              className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
              onClick={() => dispatch(setCurrentSlide(index))}
            />
          ))}
      </span>
    </div>
  );
};

export default ImageSlider;


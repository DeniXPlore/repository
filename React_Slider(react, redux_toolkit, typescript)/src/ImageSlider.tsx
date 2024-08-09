import { useEffect, useState } from "react";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true)
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false)
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false)
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url]);

  if(loading) return <div>Loading...</div>

  if(errorMsg !== null) return <div>{errorMsg}</div>

  return <div className="container">ImageSlider</div>;
};
export default ImageSlider;

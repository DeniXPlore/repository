import  {addItemToCart}  from "../features/user/userSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SIZES = [4, 4.5, 5];
const Product = (item) => {
  const { images, price, title, description } = item
  const dispatch = useDispatch();

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images.length) return;
    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item))
  }
  return (
    <section className="product">
      <div className="product-images">
        <div
          className="product-current"
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className="images-list">
          {images.map((image, i) => (
            <div
              key={i}
              className="product-image"
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <div className="product-price">{price}$</div>
          <div className="product-color">
            <span>Color:</span>Green
          </div>
          <div className="product-sizes">
            <span>Size:</span>
            <div className="product-list">
              {SIZES.map((size) => (
                <div key={size} onClick={() => setCurrentSize(size)} 
                className={`product-size ${currentSize === size ? 'active' : ''}`}>
                  {size}
                </div>
              ))}
            </div>
          </div>
          <p className="product-description">{description}</p>
          <div className="product-actions">
            <button onClick={addToCart} className="product-add" disabled={!currentSize}>Add to Cart</button>
            <button className="product-favourite">Add to Favourites</button>
          </div>
          <div className="product-bottom">
            <div className="product-purchase">19 people purchased</div>
            <Link to="/">Return to store</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;

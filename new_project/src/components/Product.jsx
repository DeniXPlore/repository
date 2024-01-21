import { Link } from "react-router-dom";
import Home from "./Home";

const SIZES = [4, 4.5, 5];
const Product = ({ images, price, title, description }) => {
  const currentImage = images[0];
  return (
    <section className="product">
      <div className="product-images">
        <div
          className="product-current"
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        {images.map((image) => (
          <div
            key={i}
            className="product-image"
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => {}}
          />
        ))}
        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <div className="product-price">{price}</div>
          <div className="product-color">
            <span>Color:</span>Green
          </div>
          <div className="product-sizes">
            <span>Size:</span>
            <div className="product-list">
              {SIZES.map((size) => (
                <div
                  key={size}
                  onClick={() => {}}
                  className={`${product - size}`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="product-description">{description}</p>
        <div className="product-actions">
          <button className="product-add">Add to Cart</button>
          <button className="product-favourites">Add to Favourites</button>
        </div>
        <div className="product-bottom">
          <div className="product-purchase">19 people purchased</div>
          <Link to={<Home />}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};
export default Product;

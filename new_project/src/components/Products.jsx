import { Link } from "react-router-dom";

const Products = ({ title, style = {}, amount, products = [] }) => {
  const list = products.filter((_, i) => i < amount)
  return (
    <section className="products" style={style}>
      {title && <h2>{title}</h2>}
      <div className="products-list">
        {list.map(
          ({ id, images, title, category: { name: cat }, price }) => (
            <Link to={`products/${id}`} key={id} className="products-product">
              <div
                className="products-image"
                style={{ backgroundImage: `url(${images[0]})` }}
              />
              <div className="products-wrapper">
                <h3 className="products-title">{title}</h3>
                <div className="products-cat">{cat}</div>
                <div className="products-info">
                  <div className="products-prices">
                    <div className="products-price">{price}$</div>
                    <div className="products-oldPrice">
                      {Math.floor(price * 1.2)}$
                    </div>
                  </div>
                  <div className="products-purchases">
                    {Math.floor(Math.random() * 20 + 1)} purchased
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
};
export default Products;

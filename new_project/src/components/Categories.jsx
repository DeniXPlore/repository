import { Link } from "react-router-dom";

const Categories = ({ title, amount, products = [] }) => {
  const list = products.filter((_, i) => i < amount);
  return (
    <section className="categories-section">
      <h2 className="categories-title">{title}</h2>
      <div className="categories-list">
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className="categories-item">
            <div
              className="categories-image"
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className="categories-title">{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Categories;

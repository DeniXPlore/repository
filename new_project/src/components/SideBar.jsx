import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const { list } = useSelector(({ categories }) => categories);
  console.log(list);
  return (
    <section className="sidebar">
      <div className="title">CATEGORIES</div>
      <nav>
        <ul className="menu">
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink   className={({ isActive }) =>
                  isActive ? 'styles-link active' : 'styles-link'}
                  
              to={`/categories/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="styles-footer">
        <a href="/help" className="link" target="_blank">
          Help
        </a>
        <a
          href="/terms"
          className="link"
          target="_blank"
          style={{ texstDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};
export default SideBar;

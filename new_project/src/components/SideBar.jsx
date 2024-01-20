import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const { list } = useSelector(({ categories }) => categories);
    return (
    <section className="sidebar">
      <div className="sidebar-title">CATEGORIES :</div>
      <nav>
        <ul className="sidebar-menu">
          {list.slice(0,9).map(({ id, name }) => (
            <li key={id}>
              <NavLink   className={({ isActive }) =>
                  isActive ? 'sidebar-link active' : 'sidebar-link'}
                  
              to={`/categories/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
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

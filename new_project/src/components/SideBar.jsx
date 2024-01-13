import { NavLink } from "react-router-dom"


const SideBar = () => {
  return (
    <section className="sidebar">
      <div className="title">
        CATEGORIES
      </div>
        <nav>
        <ul className="menu">
          <li><NavLink to={`/categories/${id}`}>
            Link
            </NavLink></li>
        </ul>
        </nav>
        <div className="footer">
          <a href="/help" className="link" target="_blank">Help</a>
          <a href="/terms" className="link" target="_blank" style={{texstDecoration: "underline"}}>Terms & Conditions</a>
        </div>
    </section>
  )
}
export default SideBar
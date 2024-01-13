import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="home" />
        </Link>
      </div>
      <div className="rights">Developed by Denis E.</div>
      <div className="socials">
        <a href="https://instagram.com" target="_blank" rel="norefferer">
          <svg className="icon">
            {/* use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}             */}
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="norefferer">
          <svg className="icon">
            {/* use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}             */}
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="norefferer">
          <svg className="icon">
            {/* use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}             */}
          </svg>
        </a>
      </div>
    </section>
  );
};
export default Footer;

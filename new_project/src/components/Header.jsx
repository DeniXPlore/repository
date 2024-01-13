import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.jpg";

const Header = () => {
  return (
    <div className="styles-header">
      <div className="styles-logo">
        <Link to="/">
          <img src={logo} alt="home" />
        </Link>
      </div>
      <div className="styles-info">
        <div className="styles-user">
          <div
            className="styles-avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          />
          <div className="styles-username">Guest</div>
        </div>
        <form className="styles-form">
          <div className="styles-icon">
            {/* <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg> */}
          </div>
          <div className="styles-input">
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoCapitalize="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className="styles-box"></div>}
        </form>
        <div className="styles-account">
          <Link to="/" className="styles-favorites">
            <svg className="styles-icon-fav">
              <use
                xlinkHref={`${import.meta.env.PUBLIC_URL}/sprite.svg#heart`}
              />
            </svg>
          </Link>
          <Link to="/cart" className="styles-cart">
            <svg className="styles-icon-cart">
              <use xlinkHref={`${import.meta.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className="styles-count">2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;

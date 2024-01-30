import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import {useGetProductsQuery} from '../features/api/apiSlice'
import { toggleForm } from "../features/user/userSlice";
import { useState } from "react";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("")
  const { currentUser } = useSelector(({ user }) => user);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true))
    else navigate("/profile")
  };
  const [values, setValues] = useState({ name: "Guest", avatar: avatar });

  const {data, isLoading} = useGetProductsQuery({title: searchValue});

  const handleSearch = ({target: {value}})  => {
    setSearchValue(value)
  }

  const useEffect =
    (() => {
      if (!currentUser) return;
      setValues(currentUser);
    },
    [currentUser]);

  return (
    <div className="styles-header">
      <div className="styles-logo">
        <Link to="/">
          <img src={logo} alt="home" />
        </Link>
      </div>
      <div className="styles-info">
        <div className="styles-user" onClick={handleClick}>
          <div
            className="styles-avatar"
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className="styles-username">{values.name}</div>
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
              onChange={handleSearch}
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

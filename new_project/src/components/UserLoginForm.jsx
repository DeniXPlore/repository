import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const UserSignupForm = ({ closeForm, toggleCurrentFormType }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(loginUser(values));
    closeForm();
  };

  return (
    <div className="user-wrapper">
      <div className="user-close" onClick={closeForm}>
        svg icon
      </div>
      <div className="user-title">Sigh Up</div>
      <form action="" className="user-form" onSubmit={handleSubmit}>
        <div className="user-group">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-link" onClick={() => toggleCurrentFormType('signup')}>Create an account</div>
        <button type="submit" className="user-submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default UserSignupForm;

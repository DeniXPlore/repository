import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/user/userSlice";

const UserSignupForm = ({ closeForm, toggleCurrentFormType }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(createUser(values));
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
            type="name"
            name="name"
            placeholder="Your name"
            value={values.name}
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
          <input
            type="avatar"
            name="avatar"
            placeholder="Your avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            // required
          />
        </div>
        <div className="user-link" onClick={() => toggleCurrentFormType('login')}>I already have an account</div>
        <button type="submit" className="user-submit">
          submit
        </button>
      </form>
    </div>
  );
};
export default UserSignupForm;

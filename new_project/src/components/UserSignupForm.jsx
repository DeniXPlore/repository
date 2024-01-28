import { useState } from "react";

const UserSignupForm = ({closeForm}) => {
  const [values, setValues] = useState({
    name: "",
    email:"",
    avatar: "",
  })
  const handleChange = ({targe: {value, name}}) => {
    setValues({...values, [name]: value})
  }
  return (
    <div className="user-wrapper">
      <div className="user-close"onClick={closeForm}>svg icon</div>
      <div className="user-title">Sigh Up</div>
      <form action="" className="user-form">
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
            // required
          />
          <input
            type="avatar"
            name="avatar"
            placeholder="Your avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-link">I already have an account</div>
        <button type="submit" className="user-submit">submit</button>
      </form>
    </div>
  );
};
export default UserSignupForm;

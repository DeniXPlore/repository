import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const handleChange = ({ targe: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotEmpty = Object.values(values).every((val) => val);
    if (!isNotEmpty) return;
    dispatch(updateUser(values));
  };

  return (
    <section className="profile">
      {!currentUser ? (
        <span>You need to login</span>
      ) : (
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
              required
            />
          </div>
        </form>
      )}
    </section>
  );
};
export default Profile;

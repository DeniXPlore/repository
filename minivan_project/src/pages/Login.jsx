import React from "react";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../api";
import "./Login.css";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null)  
  const message = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null)
    loginUser(loginFormData)
      .then((data) => console.log(data))
      .catch(err => setError(err))
      .finally(() => setStatus("idle"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-conrainer">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email adress"
          type="email"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}

export default Login;

import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/FakeAuthContext";

import Styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("name@gmail.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.loginBox}>
        <NavLink to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className={Styles.logo}
          />
        </NavLink>
        <h2 className={Styles.heading}>Sign in</h2>
        <p className={Styles.subHeading}>to continue to YouTube</p>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or phone"
            id="email"
            value={email}
            className={Styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            className={Styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={Styles.loginButton}>
            Sign In
          </button>
        </form>
        <p className={Styles.footerText}>
          Don't have an account? <a>Create account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

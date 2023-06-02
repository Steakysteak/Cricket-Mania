import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginStyles from "../css/Login.module.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  const loginHandler = (e) => {
    e.preventDefault();
    if (
      window.localStorage.getItem("username") === username &&
      window.localStorage.getItem("password") === password
    ) {
      window.localStorage.setItem("loggedIn", "true");
    } else {
      window.localStorage.setItem("loggedIn", "false");
      setError(true);
    }
    
  };
  return (
    <div className={loginStyles.form}>
      <h1 className={loginStyles.title}>Login</h1>
      <form>
        <div>
          <label htmlFor="username" className={loginStyles.subtitle}>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className={loginStyles.subtitle}>
            Password
          </label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          <div className={loginStyles.warning}>
            <p>Wrong Username or Password</p>
            <div>
              <button
                onClick={() => setError(false)}
                className="btn btn-warning"
              >
                Ok
              </button>
            </div>
          </div>
        )}
        <button className={loginStyles.submit} onClick={loginHandler}>
          Login
        </button>
      </form>
      <button
        className={loginStyles.return}
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default Login;

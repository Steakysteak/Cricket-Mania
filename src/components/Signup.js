import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupStyles from  "../css/Signup.module.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = () => {
    window.localStorage.setItem("username", `${username}`);
    window.localStorage.setItem("password", `${password}`);
  };

  return (
    <>
      <div className="">
        <h3 className={signupStyles.title}>Signup</h3>
        <form action={onSubmitHandler}>
          <div>
            <label
              htmlFor="username"
              className={signupStyles.subtitle}
            >
              Username
            </label>
            <br />
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />

            <label
              htmlFor="password"
              className={signupStyles.subtitle}
            >
              Password
            </label>
            <br />
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label
              htmlFor="confirmPassword"
              className={signupStyles.subtitle}
            >
              Confirm Password
            </label>
            <br />
            <input
              type="text"
              name="confirmPassword"
              value={confPass}
              onChange={(e) => setConfPass(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button
              disabled={
                !(username !== "" && password !== "" && password === confPass)
              }
              className="btn btn-info mr-3"
              type="submit"
              style={{ marginRight: 16 }}
              onClick={onSubmitHandler}
            >
              Submit
            </button>

            <button
              className="btn btn-warning"
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Home
            </button>
          </div>
        </form>
        <br />
      </div>
    </>
  );
}

export default Signup;

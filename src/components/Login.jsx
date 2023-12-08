import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function Login({ issubmit, setissubmit, entry, setEntry }) {
  const { userInfo, setUserInfo } = useUserContext();

  let [error, setError] = useState([]);

  const navigate = useNavigate();

  let updateHandler = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  let submitHandler = (event) => {
    event.preventDefault();
    // Add your logic for form submission if needed
  };

  let addHandler = (event) => {
    setError(validate(userInfo));
    console.log(userInfo.name);

    if (Object.keys(error).length === 0) {
      navigate("/main");
      setEntry([...entry, userInfo]);
      setissubmit(true);
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && issubmit) {
      console.log(userInfo);
      setEntry([...entry, userInfo]);
    }
  }, [error]);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleInputClick = () => {
    alert(`Use sample credentials: Username: 'admin' Password: 'admin'`);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form-container">
          <h2 className="form-heading">Login</h2>

          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label className="form-label">Username:</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-input"
                name="name"
                value={userInfo.name}
                onChange={updateHandler}
                pattern="[a-zA-Z]+"
                required
              />
              <p className="form-error">{error.name}</p>
            </div>

            <div className="form-group">
              <label className="form-label">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="form-input"
                name="password"
                value={userInfo.password}
                onChange={updateHandler}
              />
              {userInfo.password.length === 10 ? (
                <p className="form-success">Strong</p>
              ) : (
                <p className="form-error">{error.password}</p>
              )}
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Submit"
                className="form-button"
                onClick={addHandler}
              />
            </div>

            <input
              className={"credbutton"}
              type="button"
              value={"Click to get sample credentials"}
              onClick={handleInputClick}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

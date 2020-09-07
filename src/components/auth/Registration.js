import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useUtils } from "../../hooks/useUtils.js";

const Registration = () => {
  const { _loginForm  } = useUtils();

  const [form, setForm] = useState({
    email: "",
    confirmPassword: "",
    password: "",
  });

  const handleChange = (e) => {
    e.persist();
    const { id, value } = e.target;

    setForm((prevState) => {
      return { ...prevState, [id]: value.trim() };
    });

  };

  const handleRegisterFormDisplay = (e) => {
    e.preventDefault();
    _loginForm(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("mutate registration here");
  };

  return (
    <div className="login-register">
      <div className="login-register-inner">
        <div className="login-register-header">
          <h2 className="login-register-header-title">Register</h2>
        </div>
        <div className="login-register-body">
          <form className="login-register-form" onSubmit={handleRegister}>
            <div className="login-register-field">
              <label htmlFor="email" className="login-register-label">
                Email
              </label>
              <input
                className="login-register-input"
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="login-register-field">
              <label htmlFor="password" className="login-register-label">
                Password
              </label>
              <input
                className="login-register-input"
                type="password"
                id="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="login-register-field">
              <label htmlFor="confirmPassword" className="login-register-label">
                Confirm Password
              </label>
              <input
                className="login-register-input"
                type="password"
                id="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="login-register-field">
              <button className="login-register-button">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="login-register-footer">
          <div className="login-register-footer-content">
            <p className="login-register-footer-text">
              Already have an account?
            </p>
            <Link
              to="/"
              onClick={handleRegisterFormDisplay}
              className="login-register-footer-link"
            >
              LOGIN HERE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;


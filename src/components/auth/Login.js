import React from "react";
import { Link } from "react-router-dom";

import { useUtils } from "../../hooks/useUtils.js";

const Login = () => {

  const { _loginForm } = useUtils();

  const handleLoginFormDisplay = (e) => {
    e.preventDefault();
    _loginForm(false);
  };

  return (
    <div className="login-register">
      <div className="login-register-inner">
        <div className="login-register-header">
          <h2 className="login-register-header-title">LOGIN</h2>
        </div>
        <div className="login-register-body">
          <form className="login-register-form" >
            <div className="login-register-field">
              <label htmlFor="email" className="login-register-label">
                  Email
              </label>
              <input
                className="login-register-input"
                type="email"
                id="email"
                value=''
                onChange=''
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
                  value=''
                  onChange=''
                />
                </div>
                <div className="login-register-field">
                  <button className="login-register-button">LOGIN</button>
                </div>
              </form>
            </div>
            <div className="login-register-footer">
              <div className="login-register-footer-content">
                <p className="login-register-footer-text">No account yet?</p>
                <Link
                  to="/"
                  onClick={handleLoginFormDisplay}
                  className="login-register-footer-link">
                   REGISTER HERE
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;


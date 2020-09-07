import React  from 'react';
import { Link } from 'react-router-dom';

import { useUtils } from "../../hooks/useUtils.js";

const Nav = () => {

  const {
    _loginRegistrationForm,
    _scrollLock,
    _loginForm,
    isLoginRegistrationForm
  } = useUtils();

  const handleLogin = (e) => {
    e.preventDefault();
    _loginRegistrationForm(true);
    _scrollLock(true);
    _loginForm(true);
    console.log("herer login click");
  }

  const handleClose = (e) => {
    e.preventDefault();
    _scrollLock(false);
    _loginRegistrationForm(false);
  };

  const handleNavLinkDisplay = isLoginRegistrationForm ? (
    <Link to="/" onClick={handleClose} className="nav-link">
        CLOSE
    </Link>
  ) : (
    <Link to="/login" onClick={handleLogin} className="nav-link">
        LOGIN
    </Link>
  );

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
            {handleNavLinkDisplay}
        </li>
      </ul>
    </nav>
  );

}
export default Nav;

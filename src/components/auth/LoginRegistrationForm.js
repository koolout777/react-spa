import React from "react";

import { useUtils } from "../../hooks/useUtils.js";

import Login from "./Login";
import Registration from "./Registration";

const LoginRegistrationForm = () => {
  const { isLoginForm } = useUtils();

  return (
    <main className="main">
        {isLoginForm ? <Login /> : <Registration />}
    </main>
  );
}

export default LoginRegistrationForm;

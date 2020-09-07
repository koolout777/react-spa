import React, { useEffect, useState } from "react";

import { BrowserRouter } from 'react-router-dom';
import './assets/styles/style.scss'

import { useUtils } from "./hooks/useUtils.js";

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LoginRegistrationForm from "./components/auth/LoginRegistrationForm";
import Pages from './pages/Pages';


function App() {

  const { isScrollLock, isLoginRegistrationForm } = useUtils();
  const [scrollLockClass, setScrollLockClass] = useState("");

  useEffect(() => {
    if (isScrollLock) {
      setScrollLockClass("u-scroll-lock");
    } else {
      setScrollLockClass("");
    }
  }, [isScrollLock]);

  return (
    <div className={`app ${scrollLockClass}`}>
      <BrowserRouter>
         <Header />
         {!isLoginRegistrationForm ? console.log("pages") : console.log("login form")}
         {!isLoginRegistrationForm ? <Pages /> : <LoginRegistrationForm />}
         <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;


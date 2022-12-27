import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgotPasswordPage from './ForgotPasswordPage';

function App() {

  const location = useLocation();

  //Conditionally render the main, header,navbar,footer,scrolltop button
  const conditionalRender = (Component) => {

    if (location.pathname === "/login" || location.pathname === "/forgotpassword" || location.pathname === "/register") {
      document.body.className = "bg-gradient-primary";
      return (<></>);
    } else {
      document.body.classList.remove("bg-gradient-primary");
      return <Component conditionalRender = {conditionalRender}/>;
    }
  }

  return (
    <>
      {conditionalRender(MainPage)}
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/forgotpassword" element={<ForgotPasswordPage />} />
      </Routes>
    </>
  );
}

export default App;

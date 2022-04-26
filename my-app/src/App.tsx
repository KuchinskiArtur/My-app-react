import React, { useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
import RegistrationConfirmation from "./Pages/RegistrationConfirmation";
import Template from "./Pages/Template";
import Registration from "./Pages/Registration";
import PostsAll from "./Pages/AllPost";
import Header from "./components/Header/Header";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isRegist, setIsRegist] = useState(false);

  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const submit = () => {
    if (loginData.email && loginData.password) {
      setIsLogin(false);
    }
  };

  const [isRegistration, setIsRegistration] = useState(true);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const [error, setError] = useState(false);
  const login = () => {
    if (
      registrationData.name &&
      registrationData.email &&
      registrationData.password &&
      registrationData.confirmPassword
    ) {
      if (registrationData.password === registrationData.confirmPassword) {
        if (regex.test(registrationData.email)) {
          setIsRegistration(false);
          setError(false);
        } else {
          setError(true);
        }
      }
    }
  };

  const [isRegistrationConfirmation, setIsRegistrationConfirmation] =
    useState(true);
  const home = () => {
    setIsRegistration(true);
    setRegistrationData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const [isLoginPage, setIsLoginPage] = useState(true);

  const [isTemplate, setIsTemplate] = useState(true);
  const about = () => {
    setIsLogin(true);
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <div>
        <button
          className={"darkTheme " + (isDark ? "dark" : "light")}
          onClick={() => setIsDark(!isDark)}
        >
          Dark
        </button>
      </div>
      <div
        className={
          "wrapperLogin " +
          (isLoginPage ? "login" : "regist") +
          (isDark ? "dark" : "light") +
          (!isLogin || !isRegistration ? " d-none" : "")
        }
      >
        <button
          className={"login " + (isDark ? "dark" : "light")}
          onClick={() => setIsLoginPage(true)}
        >
          Login
        </button>
        <button
          className={"Registration " + (isDark ? "dark" : "light")}
          onClick={() => setIsLoginPage(false)}
        >
          Registration
        </button>
      </div>
      {isLoginPage ? (
        isLogin ? (
          <Login isDark={isDark} onChange={setLoginData} onClick={submit} />
        ) : (
          <Template isDark={isDark} onClick={about} />
        )
      ) : isRegistration ? (
        <Registration
          isDark={isDark}
          onChange={setRegistrationData}
          onClick={login}
          error={error}
        />
      ) : (
        <RegistrationConfirmation isDark={isDark} onClick={home} />
      )}
      {/* <PostsOne /> */}
      {/* <PostsAll /> */}
      {/* <Header /> */}
    </div>
  );
}

export default App;

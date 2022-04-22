import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import PostsOne from "./components/PostsOne";
import Input from "./components/Input";
import Post from "./components/AllPost";
import PostsAll from "./components/PostsAll";
import Login from "./components/Login";
import RegistrationConfirmation from "./components/RegistrationConfirmation";
import Template from "./components/Template";
import Registration from "./components/Registration";

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
  const login = () => {
    if (
      registrationData.name &&
      registrationData.email &&
      registrationData.password &&
      registrationData.confirmPassword
    ) {
      if (registrationData.password === registrationData.confirmPassword) {
        setIsRegistration(false);
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
        />
      ) : (
        <RegistrationConfirmation isDark={isDark} onClick={home} />
      )}
      {/* <PostsOne /> */}
      {/* <PostsAll /> */}
    </div>
  );
}

export default App;

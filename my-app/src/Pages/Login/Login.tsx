import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouteAll } from "../../constants/constants";
import { useThemeContext } from "../../context/ThemeModeContext";
import { useDispatch, useSelector } from "react-redux";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [isLoginPage, setIsLoginPage] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // const dispatch = useDispatch();
  // const value = useSelector((state: any) => state.value);

  // const onClick = (isPlus: boolean) => {
  //   const PLUS_ACTION = { type: "counter/incremented" };
  //   const MINUS_ACTION = { type: "counter/decremented" };
  //   dispatch(isPlus ? PLUS_ACTION : MINUS_ACTION);
  // };

  const submit = () => {
    if (!loginData.email || !loginData.password) {
      setError("empty_field");
      return;
    }

    let accounts = localStorage.getItem("accounts");
    if (accounts) {
      accounts = JSON.parse(accounts);
      if (Array.isArray(accounts)) {
        const existentAccount = accounts?.find(
          (item) =>
            item.email === loginData.email &&
            item.password === loginData.password
        );
        if (!existentAccount) {
          setError("not_existent_account");
          return;
        } else {
          localStorage.setItem("currentUser", JSON.stringify(existentAccount));
        }
      }
    } else {
      setError("not_existent_account");
      return;
    }
    return navigate(`/${RouteAll.Template}`);
  };

  const { isDark } = useThemeContext();

  const submitRegistrationForm = () => {
    navigate(`/${RouteAll.Registration}`);
  };

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <div className="firstBlockLogin">
        <div className="wrapperButtonLogin">
          <button
            className={"login " + (isDark ? "dark" : "light")}
            onClick={() => setIsLoginPage(true)}
          >
            Login
          </button>
          <button
            className={"Registration " + (isDark ? "dark" : "light")}
            onClick={submitRegistrationForm}
          >
            Registration
          </button>
        </div>
        <div className="wrappers">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(event) =>
              setLoginData((prev: any) => ({
                ...prev,
                email: event.target.value,
              }))
            }
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            onChange={(event) =>
              setLoginData((prev: any) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />
          {error === "empty_field" && (
            <div className={"errorMessage " + (isDark ? "dark" : "light")}>
              Одно из полей не заполнено. Пожалуйста проверьте
            </div>
          )}
          {error === "not_existent_account" && (
            <div className={"errorMessage " + (isDark ? "dark" : "light")}>
              Такого аккаунта не существует. Пожалуйста пройдите регистрацию
            </div>
          )}
          <button
            className={"accountLogin " + (isDark ? "dark" : "light")}
            onClick={submit}
          >
            Login
          </button>
          <div className="forgot">
            <p className={"textForgot " + (isDark ? "dark" : "light")}>
              Forgot your password?
            </p>
            <h1>Reset password</h1>
          </div>
        </div>
        {/* <button className="btnPlus" onClick={() => onClick(true)}>
          плюс
        </button>
        <button className="btnMinus" onClick={() => onClick(false)}>
          минус
        </button>
        <div style={{ fontSize: 20 }}>{value}</div> */}
      </div>
    </div>
  );
};

export default Login;

import classNames from "classnames";
import React, { useState } from "react";
import "./Registration.css";
import { Theme, useThemeContext } from "../../context/ThemeModeContext";
import { useNavigate } from "react-router-dom";
import { RouteAll } from "../../constants/constants";

interface IRegistrationProps {
  error: boolean;
}

const Registration = () => {
  const submitLoginForm = () => {
    navigate(`/${RouteAll.Login}`);
  };
  const navigate = useNavigate();
  // const [isRegistration, setIsRegistration] = useState(true);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const [error, setError] = useState("");

  const registration = () => {
    setError("");
    if (
      !registrationData.name ||
      !registrationData.email ||
      !registrationData.password ||
      !registrationData.confirmPassword
    ) {
      setError("wrong_field");
      return;
    }
    if (registrationData.password !== registrationData.confirmPassword) {
      setError("wrong_confirm_password");
      return;
    }
    if (!regex.test(registrationData.email)) {
      setError("wrong_email");
      return;
    }
    let accounts = localStorage.getItem("accounts");
    if (accounts) {
      accounts = JSON.parse(accounts);
      if (Array.isArray(accounts)) {
        const duplicateAccount = accounts?.some(
          (item) => item.email === registrationData.email
        );
        if (duplicateAccount) {
          setError("duplicate_account");
          return;
        }
        accounts.push(registrationData);
        localStorage.setItem("accounts", JSON.stringify(accounts));
      }
    } else {
      localStorage.setItem("accounts", JSON.stringify([registrationData]));
    }
    return navigate(`/${RouteAll.RegistrationConfirmation}`);
  };

  const { isDark } = useThemeContext();
  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <div>
        <div className="wrapperButtonRegistration">
          <button
            className={"login " + (isDark ? "dark" : "light")}
            onClick={submitLoginForm}
          >
            Login
          </button>
          <button className={"Registration " + (isDark ? "dark" : "light")}>
            Registration
          </button>
        </div>
        <div className={"wrappers " + (isDark ? "dark" : "light")}>
          <label htmlFor="name">Yser name</label>
          <input
            type="name"
            onChange={(event) =>
              setRegistrationData((prev: any) => ({
                ...prev,
                name: event.target.value,
              }))
            }
          />
          <label htmlFor="email">Email </label>
          <input
            type="email"
            onChange={(event) =>
              setRegistrationData((prev: any) => ({
                ...prev,
                email: event.target.value,
              }))
            }
          />
          {error === "wrong_email" && (
            <div className={"errorMessage " + (isDark ? "dark" : "light")}>
              Email введен некоректно. Пожалуйста исправьте
            </div>
          )}
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            onChange={(event) =>
              setRegistrationData((prev: any) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />
          <label className="confirm" htmlFor="Password">
            Confirm password
          </label>
          <input
            type="password"
            onChange={(event) =>
              setRegistrationData((prev: any) => ({
                ...prev,
                confirmPassword: event.target.value,
              }))
            }
          />
          {error === "wrong_confirm_password" && (
            <div className={"errorMessage " + (isDark ? "dark" : "light")}>
              Пароли несовпадают. Пожалуйста исправьте
            </div>
          )}
          {error === "wrong_field" && (
            <div className={"errorMessage " + (isDark ? "dark" : "light")}>
              Одно из полей незаполнено.
            </div>
          )}
          <button
            className={"accountLogin " + (isDark ? "dark" : "light")}
            onClick={registration}
          >
            Registration
          </button>
          <div className={"wrapRegistration " + (isDark ? "dark" : "light")}>
            <p>if you have account, you can</p>
            <button
              className={"lastLogin " + (isDark ? "dark" : "light")}
              onClick={submitLoginForm}
            >
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

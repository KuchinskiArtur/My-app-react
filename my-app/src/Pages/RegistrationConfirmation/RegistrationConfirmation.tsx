import "./RegistrationConfirmation.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouteAll } from "../../constants/constants";
import { useThemeContext } from "../../context/ThemeModeContext";

const RegistrationConfirmation = () => {
  const navigate = useNavigate();
  const [isRegistrationConfirmation, setIsRegistrationConfirmation] =
    useState(true);
  const home = () => {
    navigate(`/${RouteAll.Registration}`);

    // setIsRegistration(true);
    // setRegistrationData({
    //   name: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });
  };
  const { isDark } = useThemeContext();
  return (
    <div
      className={
        "firstBlockRegistrationConfirmation " + (isDark ? "dark" : "light")
      }
    >
      <div
        className={
          "wrapperRegistrationConfirmation " + (isDark ? "dark" : "light")
        }
      >
        <h1>Registration Confirmation</h1>
        <div
          className={
            "wrapRegistrationConfirmation " + (isDark ? "dark" : "light")
          }
        >
          <p>
            Please active your account with the activation link in the email{" "}
            <span>text@gmail.com</span>{" "}
          </p>
          <p>Please check your email</p>
        </div>
        <button
          className={"btnRegistration " + (isDark ? "dark" : "light")}
          onClick={home}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;

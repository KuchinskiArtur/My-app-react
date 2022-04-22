import "./RegistrationConfirmation.css";
import React, { useState } from "react";

const RegistrationConfirmation = ({ isDark, onClick }: any) => {
  return (
    <div className="firstBlock">
      <div className={"wrapperRegistration " + (isDark ? "dark" : "light")}>
        <h1>Registration Confirmation</h1>
        <div className={"wrapRegistration " + (isDark ? "dark" : "light")}>
          <p>
            Please active your account with the activation link in the email{" "}
            <span>text@gmail.com</span>{" "}
          </p>
          <p>Please check your email</p>
        </div>
        <button
          className={"btnRegistration " + (isDark ? "dark" : "light")}
          onClick={onClick}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;

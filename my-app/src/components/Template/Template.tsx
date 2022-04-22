import React, { useState } from "react";
import "./Template.css";

const RegistrationConfirmation = ({ isDark, onClick }: any) => {
  return (
    <div className="firstBlock">
      <div className={"wrapper-template " + (isDark ? "dark" : "light")}>
        <h1>Template title</h1>
        <div className={"wrap " + (isDark ? "dark" : "light")}>
          <p>Template body</p>
        </div>
        <button
          className={"btnTemplate " + (isDark ? "dark" : "light")}
          onClick={onClick}
        >
          button
        </button>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;

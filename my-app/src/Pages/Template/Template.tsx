import React, { useState } from "react";
import "./Template.css";

interface templateProps {
  isDark: boolean;
  onClick: (prev: any) => void;
}

const RegistrationConfirmation = ({ isDark, onClick }: templateProps) => {
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

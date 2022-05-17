import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouteAll } from "../../constants/constants";
import { useThemeContext } from "../../context/ThemeModeContext";
import "./Template.css";

const Template = () => {
  const navigate = useNavigate();
  const [isTemplate, setIsTemplate] = useState(true);

  const about = () => {
    navigate(`/${RouteAll.Login}`);
    // setIsLogin(true);
    // setLoginData({
    //   email: "",
    //   password: "",
    // });
  };
  const { isDark } = useThemeContext();
  return (
    <div className={"firstBlockTemplate " + (isDark ? "dark" : "light")}>
      <div className={"wrapper-template " + (isDark ? "dark" : "light")}>
        <h1>Template title</h1>
        <div className={"wrap " + (isDark ? "dark" : "light")}>
          <p>Template body</p>
        </div>
        <button
          className={"btnTemplate " + (isDark ? "dark" : "light")}
          onClick={about}
        >
          button
        </button>
      </div>
    </div>
  );
};

export default Template;

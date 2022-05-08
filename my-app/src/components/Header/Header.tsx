import React, { useState } from "react";
import "./Header.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeModeContext";

const Header = () => {
  const [menuActive, setMenuActive] = useState("");
  const [userActive, setuserActive] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);
  const { isDark, onChangeTheme } = useThemeContext();
  const { menu, setMenu } = useThemeContext();
  const onClick = onChangeTheme ? onChangeTheme : () => {};
  const btnActive = () => {
    setMenuActive(!menuActive ? "user" : "");
    if (setMenu) setMenu(!menu);
  };

  const deleteAccount = () => {
    localStorage.removeItem("currentUser");
  };

  return (
    <div className="cardPost">
      <div className="navbarWrap">
        <div className="App">
          <nav className={`navbarHeader ${isDark ? " dark" : ""}`}>
            <div
              className="burgerBtn "
              onClick={() => setMenuActive(!menuActive ? "nav" : "")}
            >
              <span />
            </div>

            <p className="userName " onClick={btnActive}>
              <i className="fa-solid fa-user"></i> Username
            </p>
          </nav>

          <div className={"contents " + (menuActive !== "nav" ? "d-none" : "")}>
            <button className="done" onClick={() => setMenuActive("")}>
              x
            </button>

            <NavLink to="cards-list">All posts</NavLink>
            <NavLink to="information">Information</NavLink>
            <button className="logOut" onClick={deleteAccount}>
              Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>

          <div
            className={"userLogin " + (menuActive !== "user" ? "d-none" : "")}
          >
            <button className="done " onClick={() => setMenuActive("")}>
              x
            </button>

            <div className="userWrap">
              <NavLink to="login" className="btnLogin">
                Login
              </NavLink>
              <NavLink to="registration" className="btnregistration">
                Registration
              </NavLink>
            </div>
          </div>
          <div className="btnThemeWrapper">
            <div
              onClick={onClick}
              className={"darkTheme " + (isDark ? "dark" : "light")}
            >
              <div className="toggle-container"></div>
              <div className="toggle-circle"></div>
              <input type="checkbox" className="toggle-input" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;

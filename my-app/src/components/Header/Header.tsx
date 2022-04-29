import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [userActive, setuserActive] = useState(false);

  return (
    <div className="cardPost">
      <div className="App">
        <nav className="navbarHeader">
          <div
            className="burgerBtn "
            onClick={() => setMenuActive(!menuActive)}
          >
            <span />
          </div>
          <p className="userName " onClick={() => setuserActive(!userActive)}>
            <i className="fa-solid fa-user"></i> Username
          </p>
        </nav>

        <div className={"content " + (!menuActive ? "d-none" : "")}>
          <button className="done">x</button>
          <h1>All posts</h1>
          <p className="contentP">
            My posts
            <button className="addPost">+ Add</button>
          </p>
          <button className="logOut">
            Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>

        <div className={"userLogin " + (!userActive ? "d-none" : "")}>
          <button className="done">x</button>
          <div className="userWrap">
            <button className="btnLogin">Login</button>
            <button className="btnregistration">Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

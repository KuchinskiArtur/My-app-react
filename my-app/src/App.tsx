import React, { useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
import RegistrationConfirmation from "./Pages/RegistrationConfirmation";
import Template from "./Pages/Template";
import Registration from "./Pages/Registration";
import PostsAll from "./Pages/AllPost";
import Header from "./components/Header/Header";
import { ThemeModeProvider } from "./context/ThemeModeProvider";
import { Theme } from "./context/ThemeModeContext";
import Information from "./Pages/Information/Information";
import Router from "./Pages/Router";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [menu, setMenu] = useState(false);

  const onChangeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeModeProvider
      menu={menu}
      setMenu={setMenu}
      isDark={isDark}
      onChangeTheme={onChangeTheme}
    >
      <Router />
    </ThemeModeProvider>
  );
}

export default App;

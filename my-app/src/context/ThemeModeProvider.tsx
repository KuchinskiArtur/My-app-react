import React, { FC } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeModeContext";

export const ThemeModeProvider: FC<ThemeContextType> = ({
  isDark,
  onChangeTheme,
  children,
  menu,
  setMenu,
}) => {
  return (
    <ThemeContext.Provider value={{ isDark, onChangeTheme, menu, setMenu }}>
      {children}
    </ThemeContext.Provider>
  );
};

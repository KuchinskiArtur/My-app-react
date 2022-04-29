import React, { FC } from "react";
import { ThemeContext, ThemeContextType } from "./ThemeModeContext";

export const ThemeModeProvider: FC<ThemeContextType> = ({
  theme,
  onChangeTheme,
  children,
}) => {
  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

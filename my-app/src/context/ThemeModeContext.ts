import React, { Dispatch, SetStateAction, useContext } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

const defaultValue = {
  isDark: false,
  menu: false,
};

export type ThemeContextType = {
  isDark: boolean;
  onChangeTheme?: () => void;
  children?: any;
  menu: boolean;
  setMenu?: Dispatch<SetStateAction<boolean>>;
};

export const ThemeContext = React.createContext<ThemeContextType>(defaultValue);

export const useThemeContext = () => useContext(ThemeContext);

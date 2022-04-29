import classNames from "classnames";
import React from "react";
import "./Registration.css";
import { Theme, useThemeContext } from "../../context/ThemeModeContext";

interface IRegistrationProps {
  isDark: boolean;
  onChange: (prev: any) => void;
  onClick: (prev: any) => void;
  error: boolean;
}

const Registration = ({
  isDark,
  onChange,
  onClick,
  error,
}: IRegistrationProps) => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();

  const isLightTheme = theme === Theme.Light;

  const onClickTheme = () => {
    onChangeTheme(Theme.Dark);
  };

  return (
    <div
      onClick={onClickTheme}
      className={classNames("firstBlock", { ["darkContainer"]: !isLightTheme })}
    >
      <div className="wrappers">
        <label htmlFor="name">Yser name</label>
        <input
          type="name"
          onChange={(event) =>
            onChange((prev: any) => ({ ...prev, name: event.target.value }))
          }
        />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          onChange={(event) =>
            onChange((prev: any) => ({ ...prev, email: event.target.value }))
          }
        />
        {error && <div>Email введен некоректно. Пожалуйста исправьте</div>}
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          onChange={(event) =>
            onChange((prev: any) => ({ ...prev, password: event.target.value }))
          }
        />
        <label className="confirm" htmlFor="Password">
          Confirm password
        </label>
        <input
          type="password"
          onChange={(event) =>
            onChange((prev: any) => ({
              ...prev,
              confirmPassword: event.target.value,
            }))
          }
        />
        {/* {error && <div>Пароли не совпадают. Пожалуйста исправьте</div>} */}
        <button
          className={"accountLogin " + (isDark ? "dark" : "light")}
          onClick={onClick}
        >
          Login
        </button>
        <div className={"wrap " + (isDark ? "dark" : "light")}>
          <p>if you have account, you can</p>
          <button className={"lastLogin " + (isDark ? "dark" : "light")}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;

import React, { useState } from "react";
import "./Login.css";

interface ILoginProps {
  isDark: boolean;
  onChange: (prev: any) => void;
  onClick: (prev: any) => void;
}

const Login = ({ isDark, onChange, onClick }: ILoginProps) => {
  return (
    <div className="firstBlock">
      <div className="wrappers">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(event) =>
            onChange((prev: any) => ({ ...prev, email: event.target.value }))
          }
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          onChange={(event) =>
            onChange((prev: any) => ({ ...prev, password: event.target.value }))
          }
        />
        <button
          className={"accountLogin " + (isDark ? "dark" : "light")}
          onClick={onClick}
        >
          Login
        </button>
        <div className="forgot">
          <p className={"textForgot " + (isDark ? "dark" : "light")}>
            Forgot your password?
          </p>
          <h1>Reset password</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;

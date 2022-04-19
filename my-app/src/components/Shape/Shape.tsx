import React from "react";
import "./Shape.css";


const Shape = () => {
  return (
    <div className="firstBlock">
        <div className="wrapper">
        <h1>Login</h1>
        <span>|</span>
        <p>Registration</p>
    </div>
      <div className="wrappers">
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="Password">Password</label>
        <input type="password" />
        <button>Login</button>
        <div className="wrap">
        <p>forgot your password?</p>
        <h1>Reset password</h1>
        </div>
      </div>
    </div>
  );
};

export default Shape;

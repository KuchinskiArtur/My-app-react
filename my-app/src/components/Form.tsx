import React from "react";
import Input from "./Input";
import Post from "./Post";

function Form() {
  return (
    <>
      <div className="freeInput">
        <Input className="text" type={"text"} />
        <Input className="password" type={"password"} />
        <Input className="email" type={"email"} />
      </div>
      <div className="lastInput">
        <textarea className="textarea" />
      </div>
    </>
  );
}

export default Form;

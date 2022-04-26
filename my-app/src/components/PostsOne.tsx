import React from "react";
import "../App.css";
import Input from "./Input";
import Post from "./Post";

function PostsOne() {
  return (
    <>
      <div className="App">
        <Post
          img="http://img2.safereactor.cc/pics/post/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg"
          header="It's my header?"
          description="The roof comes from the react"
          date="12.12.2021"
        />
      </div>
    </>
  );
}

export default PostsOne;

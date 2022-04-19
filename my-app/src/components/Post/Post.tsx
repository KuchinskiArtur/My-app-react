import React from "react";
import "./Post.css";

const Post = ({ img, header, description, date }: any) => {
  return (
    <div className="block">
      {img && <img className="image" src={img} alt="image" />}
      <div className="wrapper">
        <h1>{header}</h1>
        <p>{description}</p>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Post;

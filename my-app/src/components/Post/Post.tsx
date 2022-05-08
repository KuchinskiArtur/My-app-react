import React from "react";
import "./Post.css";

// interface PostProps {
//   img?: object;
//   header: string;
//   description: string;
//   date: string;
// }

const Post = ({ img, header, description, date, deletePost, id }: any) => {
  return (
    <div>
      <div className="userName">
        <span>Username</span>
      </div>
      <div className="content">
        <p>Content title</p>
      </div>
      <div className="block">
        {img && <img className="image" src={img} alt="image" />}
        <div className="wrapperPost">
          <h1>{header}</h1>
          <p>{description}</p>
          <span>{date}</span>
          <button className="btnDelete" onClick={() => deletePost(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

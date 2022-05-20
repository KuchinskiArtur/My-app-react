import React from "react";
import "./Post.css";
import Popup from "reactjs-popup";

interface PostProps {
  img?: string;
  header: string;
  description: string;
  date: string;
  deletePost?: any;
  id?: number;
  onClick?: () => void;
}

const Post = ({
  img,
  header,
  description,
  date,
  deletePost,
  id,
  onClick,
}: PostProps) => {
  return (
    <div className="CardOne" onClick={onClick}>
      <div className="content">
        <p>Content title</p>
      </div>
      <div className="block">
        {img && <img className="image" src={img} alt="image" />}
        <div className="wrapperPost">
          <h1>{header}</h1>
          <p>{description}</p>
          <span>{date}</span>
          <Popup
            trigger={
              <button className="checkImage">
                <i className="fa-solid fa-eye"></i>
              </button>
            }
            position={"top center"}
          >
            <img className="imgSize" src={img} alt="" />
          </Popup>
          <button className="btnDelete" onClick={() => deletePost(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

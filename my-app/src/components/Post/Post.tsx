import React from "react";
import "./Post.css";
import Popup from "reactjs-popup";
import { useSelector, useDispatch } from "react-redux";
import { setLikePost } from "../../redux/reducers/postsReducer";
import "reactjs-popup/dist/index.css";

interface PostProps {
  img?: string;
  header: string;
  description: string;
  date: string;
  deletePost?: any;
  id?: number;
  saved?: boolean;
  onClick?: () => void;
  likeStatus?: string;
}

const Post = ({
  img,
  header,
  description,
  date,
  deletePost,
  saved,
  id,
  likeStatus,
  onClick,
}: PostProps) => {
  const dispatch = useDispatch();

  const handleButtonClick = (action: string) => {
    if (action === "like" || action === "dislike") {
      dispatch(setLikePost({ id, action }));
    } else if (action === "save") {
      dispatch(setLikePost({ id, action }));
    }
  };

  const CloseButton: any = (close: any) => {
    return (
      <div className="wrapperPopup">
        <button className="btnClose" onClick={close}>
          x
        </button>
        <img className="imgSize" src={img} alt="" />
      </div>
    );
  };

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
            position="top left"
            children={CloseButton}
          />
          <button
            className={likeStatus === "like" ? "btnLike" : ""}
            onClick={() => handleButtonClick("like")}
          >
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button
            className={likeStatus === "dislike" ? "btnLike" : ""}
            onClick={() => handleButtonClick("dislike")}
          >
            <i className="fa-solid fa-thumbs-down"></i>
          </button>
          <button
            className={saved ? "btnLike" : ""}
            onClick={() => handleButtonClick("save")}
          >
            <i className="fa-solid fa-bookmark"></i>
          </button>

          <button className="btnDelete" onClick={() => deletePost(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

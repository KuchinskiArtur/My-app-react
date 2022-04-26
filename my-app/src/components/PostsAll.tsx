import React, { useState } from "react";
import "../App.css";
import Post from "../Pages/AllPost";

const array = [
  {
    img: "https://klike.net/uploads/posts/2019-03/1551774955_22.jpg",
    text: "Johnny, what did they do to you?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "7.7.2007",
  },
  {
    img: "https://klike.net/uploads/posts/2019-03/1551774929_2.jpg",
    header: "Normal woman?",
    description: "Don't waste this wonder",
    date: "12.12.2021",
  },
  {
    img: "https://klike.net/uploads/posts/2019-03/medium/1551774928_3.jpg",
    header: "How so?",
    description: "Always like this",
    date: "02.06.2006",
  },
  {
    img: "https://avatarko.ru/img/kartinka/2/ptica_ruki_prikol_vorona_1727.jpg",
    header: "Do you have seeds?",
    description: "Well, if only a little",
    date: "10.07.2000",
  },
];

const CardPost = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="cardPost">
      <div className="App">
        <nav className="navbar">
          <div
            className="burgerBtn "
            onClick={() => setMenuActive(!menuActive)}
          >
            <span />
            <p>Username</p>
          </div>
        </nav>
        <div className={"content " + (!menuActive ? "d-none" : "")}>
          <p>My posts</p>
          <button className="addPost">+ Add</button>
        </div>
        {array.map((item) => (
          <Post
            img={item.img}
            text={item.text}
            description={item.description}
            date={item.date}
          ></Post>
        ))}
      </div>
    </div>
  );
};

export default CardPost;

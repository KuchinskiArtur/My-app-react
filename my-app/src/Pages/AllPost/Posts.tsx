import React, { useState } from "react";
import Post from "../../components/Post";
import "./Posts.css";

const array = [
  {
    img: "https://klike.net/uploads/posts/2019-03/1551774955_22.jpg",
    header: "Johnny, what did they do to you?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "7.7.2007",
    id: 0,
  },
  {
    img: "https://klike.net/uploads/posts/2019-03/1551774929_2.jpg",
    header: "Normal woman?",
    description: "Don't waste this wonder",
    date: "12.12.2021",
    id: 1,
  },
  {
    img: "https://klike.net/uploads/posts/2019-03/medium/1551774928_3.jpg",
    header: "How so?",
    description: "Always like this",
    date: "02.06.2006",
    id: 2,
  },
  {
    img: "https://avatarko.ru/img/kartinka/2/ptica_ruki_prikol_vorona_1727.jpg",
    header: "Do you have seeds?",
    description: "Well, if only a little",
    date: "10.07.2000",
    id: 3,
  },
];

const CardPost = () => {
  const [post, setPost] = useState(array);

  const addPost = () => {
    setPost((prev) => {
      return [
        ...prev,
        {
          img: "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkJYv0MPKDNRfAHgRz5Jc3SaaKTM5SRkZCeTgDn6uOyic",
          header: "advertisement!!!!!!",
          description: "place for your advertisement",
          date: "10.07.2000",
          id: prev.length,
        },
      ];
    });
  };

  const deletePost = (id: number) => {
    setPost((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="cardPost">
      <div className="Header">
        <div className="wrapAddPost">
          <p>My posts</p>
          <button className="addPost" onClick={addPost}>
            + Add
          </button>
        </div>
        {post.map((item) => (
          <Post
            id={item.id}
            key={item.id}
            img={item.img}
            header={item.header}
            description={item.description}
            date={item.date}
            deletePost={deletePost}
          ></Post>
        ))}
      </div>
    </div>
  );
};

export default CardPost;

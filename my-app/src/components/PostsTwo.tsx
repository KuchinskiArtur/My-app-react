import React from "react";
import "../App.css";
import Form from "./Form";
import PostsOne from "./PostsOne";
import Input from "./Input";
import Post from "./PostTwo";

function PostsTwo() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <PostsOne /> */}
            <Post
                img="https://klike.net/uploads/posts/2019-03/1551774955_22.jpg"
                header="Johnny, what did they do to you?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                date="7.7.2007"
            />
            <Post
                img="https://klike.net/uploads/posts/2019-03/1551774929_2.jpg"
                header="Normal woman?"
                description="Don't waste this wonder"
                date="12.12.2021"
            />
            <Post
               img="https://klike.net/uploads/posts/2019-03/medium/1551774928_3.jpg"
                header="How so?"
                description="Always like this"
                date="02.06.2006"
            />
            <Post
                img="https://avatarko.ru/img/kartinka/2/ptica_ruki_prikol_vorona_1727.jpg"
                header="Do you have seeds?"
                description="Well, if only a little"
                date="10.07.2000"
            />
        </div>
  );  
}

export default PostsTwo;

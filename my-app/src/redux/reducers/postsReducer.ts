import { createSlice, Draft } from "@reduxjs/toolkit";
import { Card } from "../../common/types";

type PostState = {
  selectedPost: string | Array<string> | null;
  cardList: Card[];
};

const initialState: PostState = {
  selectedPost: null,
  cardList: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost: (state: Draft<PostState>, action) => {
      state.selectedPost = action.payload;
    },
    loadData: (state, action) => {
      console.log(action);

      state.cardList = action.payload.map((cards: Card) => {
        return {
          ...cards,
          likeStatus: null,
          saved: false,
        };
      });
    },
    setLikePost: (state: any, action) => {
      const cards = state.cardList.find((c: any) => c.id === action.payload.id);
      if (cards) {
        if (action.payload.action === "save") {
          cards.saved = !cards.saved;
        } else {
          cards.likeStatus = action.payload.action;
        }
      }
    },
  },
});

export const FETCH_POSTS = "FETCH_POSTS";

export const { setSelectedPost, loadData, setLikePost } = postSlice.actions;

export default postSlice.reducer;

export const PostsSelectors = {
  getSelectedPost: (state: any) => state.posts.selectedPost,
  getCards: (state: any, filters: any) => {
    const cards = state.posts.cardList;
    switch (filters) {
      case "like":
        return cards.filter((item: any) => item.likeStatus === "like");
      case "dislike":
        return cards.filter((item: any) => item.likeStatus === "dislike");
      case "save":
        return cards.filter((item: any) => item.saved);
      case "all":
        return cards;
      default:
        return cards;
    }
  },
};

export const setUsers = (payload: any) => {
  loadData({ type: "posts/loadData", payload });
  return { type: "loadData", payload };
};

export const fetchPosts = () => {
  return { type: FETCH_POSTS };
};

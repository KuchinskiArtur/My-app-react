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

    // setSavePost: (state, action) => {}
  },
});

export const { setSelectedPost, loadData, setLikePost } = postSlice.actions;

export default postSlice.reducer;

export const PostsSelectors = {
  getSelectedPost: (state: any) => state.posts.selectedPost,
  getCards: (state: any, filters: any) => {
    const cards = state.posts.cardList;
    switch (filters) {
      case "like":
        return cards;
      case "dislike":
        return cards;
      case "saved":
        return cards;
      case "all":
      default:
        return cards;
    }
  },
};

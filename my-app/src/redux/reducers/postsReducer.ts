import { createSlice, Draft } from "@reduxjs/toolkit";
import { Card } from "../../common/types";

type PostState = {
  selectedPost: Card | null;
};

const initialState: PostState = {
  selectedPost: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost: (state: Draft<PostState>, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { setSelectedPost } = postSlice.actions;

export default postSlice.reducer;

export const PostsSelectors = {
  getSelectedPost: (state: any) => state.posts.selectedPost,
};

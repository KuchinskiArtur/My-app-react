import { createSlice, Draft } from "@reduxjs/toolkit";
import { Card } from "../../common/types";

type PostState = {
  selectedPost: Card | null;
};

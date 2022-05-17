import {
  legacy_createStore as createStore,
  compose,
  combineReducers,
} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import postsReducer from "./reducers/postsReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

interface iDefoultState {
  value: number;
  isDark: boolean;
}

const defoultState: iDefoultState = { value: 0, isDark: false };

function counterReducer(state = defoultState, action: any) {
  switch (action.type) {
    case "counter/incremented":
      console.log("+");

      return { ...state, value: state.value + 1 };

    case "counter/decremented":
      console.log("-");

      return { ...state, value: state.value - 1 };

    case "changeTheme":
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
}

const reducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: {},
});

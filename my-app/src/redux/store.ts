import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";

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

export const store = createStore(counterReducer);

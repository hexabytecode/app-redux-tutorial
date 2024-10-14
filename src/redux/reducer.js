import { createStore } from "redux";

const initialState = { count: 0, step: 3 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };
    case "DECREMENT":
      return { ...state, count: state.count - state.step };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;

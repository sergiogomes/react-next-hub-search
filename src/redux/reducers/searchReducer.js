import { HYDRATE } from "next-redux-wrapper";

import { CHANGE_SEARCH } from "../actions/searchActions";

const initialState = {
  text: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case CHANGE_SEARCH:
      return { ...state, text: action.text };
    default:
      return { ...state };
  }
};

export default searchReducer;

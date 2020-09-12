import { HYDRATE } from "next-redux-wrapper";

import { CHANGE_PAGE } from "../actions/pageActions";

const initialState = {
  currentPage: 1,
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case CHANGE_PAGE:
      return { ...state, currentPage: parseInt(action.currentPage) };
    default:
      return { ...state };
  }
};

export default pageReducer;

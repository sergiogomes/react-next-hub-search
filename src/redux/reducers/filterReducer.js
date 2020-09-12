import { HYDRATE } from "next-redux-wrapper";

import { CHANGE_FILTER } from "../actions/filterActions";

const initialState = {
  title: "Repositories",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case CHANGE_FILTER:
      return { ...state, title: action.title };
    default:
      return { ...state };
  }
};

export default filterReducer;

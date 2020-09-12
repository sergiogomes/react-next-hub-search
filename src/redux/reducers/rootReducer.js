import { combineReducers } from "redux";

import filterReducer from "./filterReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  search: searchReducer,
});

export default rootReducer;

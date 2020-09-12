import { combineReducers } from "redux";

import filterReducer from "./filterReducer";
import searchReducer from "./searchReducer";
import pageReducer from "./pageReducer";
import resultsReducer from "./resultsReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  search: searchReducer,
  pagination: pageReducer,
  results: resultsReducer,
});

export default rootReducer;

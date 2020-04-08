import { combineReducers } from "redux";
import getReducers from "../reducers/getReducers.js";

export default combineReducers({
  data: getReducers,
});

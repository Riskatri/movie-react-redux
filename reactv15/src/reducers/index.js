// let initialState = {
//   data: [],
// };

// const mainReducer = (state = initialState, action) => {
//   if (action.type === "CHANGE_MOVIE") {
//     return {
//       ...state,
//       data: action.data,
//     };
//   } else {
//     return {
//       ...state,
//     };
//   }
// };

// export default mainReducer;

import { combineReducers } from "redux";
import getReducers from "../reducers/getReducers.js";

export default combineReducers({
  data: getReducers,
});

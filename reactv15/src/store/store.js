// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducers/rootReducer";
// import thunk from "redux-thunk";

// const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

// export default configureStore;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;

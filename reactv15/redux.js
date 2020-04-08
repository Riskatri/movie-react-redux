const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  name: "riska",
  lastname: " tri handayani ",
};

//reducer
const rootReducer = (state = initialState, action) => {
  //   console.log(action);
  //   if (action.type === ("ADD_NAME" && "ADD_LASTNAME")) {
  //     return {
  //       ...state,
  //       name: "agit ",
  //       lastname: "septian",
  //     };
  //   }
  //   return state;

  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        name: "agit",
      };
    case "ADD_LASTNAME":
      return {
        ...state,
        lastname: "septian",
      };
    default:
      return state;
  }
};
//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(() => {
  console.log("store changes: ", store.getState());
});

//dispatch
// store.dispatch({ type: "ADD_NAME" && "ADD_LASTNAME" });
store.dispatch({ type: "ADD_NAME" });
store.dispatch({ type: "ADD_LASTNAME" });
console.log(store.getState());

import { FETCH_GETS } from "../actions/index";

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_GETS:
      //   console.log("reducer");
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

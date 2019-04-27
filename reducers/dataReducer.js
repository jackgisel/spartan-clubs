import { FETCH_CLUBS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CLUBS:
      return action.payload;
    default:
      return state;
  }
};
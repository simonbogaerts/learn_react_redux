import * as types from "../constants/authorActionsTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCES:
      return action.data;

    default:
      return state;
  }
}

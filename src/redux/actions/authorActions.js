import * as types from "../constants/actionsTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuthorsSucces(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, data: authors };
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginApiCall());

    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSucces(authors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

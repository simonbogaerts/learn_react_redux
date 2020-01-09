import * as types from "../constants/courseActionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.data }];

    default:
      return state;
  }
}

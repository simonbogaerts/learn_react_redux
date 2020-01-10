import * as types from "../constants/courseActionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.data }];

    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.data.id ? action.data : course
      );

    case types.LOAD_COURSES_SUCCESS:
      return action.data;

    default:
      return state;
  }
}

import * as types from "../constants/courseActionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, data: course };
}

export function loadCoursesSucces(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, data: courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(cources => {
        dispatch(loadCoursesSucces(cources));
      })
      .catch(error => {
        throw error;
      });
  };
}

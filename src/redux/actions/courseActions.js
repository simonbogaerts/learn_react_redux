import * as types from "../constants/actionsTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCoursesSucces(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, data: courses };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, data: course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, data: course };
}

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, data: course };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginApiCall());

    return courseApi
      .getCourses()
      .then(cources => {
        dispatch(loadCoursesSucces(cources));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginApiCall());

    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function(dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}

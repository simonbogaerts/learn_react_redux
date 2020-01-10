import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("Should render 'Add Course' header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("Labels save buttons as 'Save' when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("Labels save buttons as 'Saving...' when not saving", () => {
  const { getByText, debug } = renderCourseForm({ saving: true });
  // debug();
  getByText("Saving...");
});

import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  GET_COURSE_FAILURE,
  GET_COURSE_SUCCESS,
  GET_COURSE_REQUEST,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAILURE,
  UPDATE_COURSE_REQUEST,
  UPDATE_COURSE_SUCCESS,
  UPDATE_COURSE_FAILURE,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAILURE,
} from "../constants/courses";
import Swal from 'sweetalert2'

import coursesAPI from "../services/coursesAPI";

export function getCoursesByCategory(category) {
  return async (dispatch) => {
    dispatch({ type: GET_COURSE_REQUEST });
    try {
      const { data } = await coursesAPI.getCoursesByCategory(category);
      dispatch({ type: GET_COURSE_SUCCESS, payload: {...data } });

    } catch (error) {
      dispatch({
        type: GET_COURSE_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}

export function getAllCourses() {
  return async (dispatch) => {
    dispatch({ type: GET_COURSES_REQUEST });
    try {
      const { data } = await coursesAPI.getCourses();
      localStorage.setItem("courses", JSON.stringify(data));
      dispatch({ type: GET_COURSES_SUCCESS, payload: data  });

    } catch (error) {
      dispatch({
        type: GET_COURSES_FAILURE,
        payload: { error: error.response?.data?.message },
      });
    }
  };
}

export function CreateCourse(values) {
  return async (dispatch) => {
    dispatch({ type: CREATE_COURSE_REQUEST });
    try {
      const createData = await coursesAPI.createCourse(values);

      const  {data}  = await coursesAPI.getCourses();

      dispatch({ type: CREATE_COURSE_SUCCESS, payload: data });
      Swal.fire({
        // position: 'top-end',
        icon: "success",
        title: "Create success",
        // showConfirmButton: false,
        confirmButtonText: "OK",
        timer: 1500,
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message? error.response.data.message : error.response.data.sqlMessage,
      });
      dispatch({
        type: CREATE_COURSE_FAILURE,
        payload: { error: error.response.data.message },
      });
    }
  };
}

export function UpdateCourse(values) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_COURSE_REQUEST });
    try {
      // console.log(values)
      const UpdateData = await coursesAPI.updateCourse(values);

      const  {data}  = await coursesAPI.getCourses();

      Swal.fire({
        // position: 'top-end',
        icon: "success",
        title: "Update success",
        // showConfirmButton: false,
        confirmButtonText: "OK",
        timer: 1500,
      });

      dispatch({ type: UPDATE_COURSE_SUCCESS, payload: data });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response,
      }); 

      dispatch({
        type: UPDATE_COURSE_FAILURE,
        payload: { error: error.response.data.message },
      });
    }
  };
}

export function DeletedCourse(values) {
  return async (dispatch) => {
    dispatch({ type: DELETE_COURSE_REQUEST });
    try {
      // console.log(values,listTypeBlogs)

      const deleteData = await coursesAPI.deleteCourse(values);

      const  {data}  = await coursesAPI.getCourses();

      dispatch({ type: DELETE_COURSE_SUCCESS, payload: data });
      Swal.fire({
        // position: 'top-end',
        icon: "success",
        title: "Deleted success",
        // showConfirmButton: false,
        confirmButtonText: "OK",
        timer: 1500,
      });
    } catch (error) {
      dispatch({
        type: DELETE_COURSE_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}
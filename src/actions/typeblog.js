import {
  GET_TYPEBLOG_REQUEST,
  GET_TYPEBLOG_SUCCESS,
  GET_TYPEBLOG_FAILURE,
  CREATE_TYPEBLOG_REQUEST,
  CREATE_TYPEBLOG_SUCCESS,
  CREATE_TYPEBLOG_FAILURE,
  UPDATE_TYPEBLOG_REQUEST,
  UPDATE_TYPEBLOG_SUCCESS,
  UPDATE_TYPEBLOG_FAILURE,
  DELETE_TYPEBLOG_REQUEST,
  DELETE_TYPEBLOG_SUCCESS,
  DELETE_TYPEBLOG_FAILURE,
} from "../constants/typeblogs";
import typeblogAPI from "../services/typeblogsAPI";
import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

export function getListTypeBlogs() {
  return async (dispatch) => {
    dispatch({ type: GET_TYPEBLOG_REQUEST });
    try {
      const { data } = await typeblogAPI.getTypeBLogs();
      // localStorage.setItem("access_token", JSON.stringify(data));
      dispatch({ type: GET_TYPEBLOG_SUCCESS, payload: { ...data } });
    } catch (error) {
      dispatch({
        type: GET_TYPEBLOG_FAILURE,
        payload: { error: error?.response?.data?.message },
      });
    }
  };
}

export function CreateTypeBlog(values) {
  return async (dispatch) => {
    dispatch({ type: CREATE_TYPEBLOG_REQUEST });
    try {
      const  list  = await typeblogAPI.getTypeBLogs();
      const { data } = await typeblogAPI.createTypeBlog(values);

      list.data.push(data)

      dispatch({ type: CREATE_TYPEBLOG_SUCCESS, payload: list.data });
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
        type: CREATE_TYPEBLOG_FAILURE,
        payload: { error: error.response.data.message },
      });
    }
  };
}

export function UpdateTypeBlog(values) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_TYPEBLOG_REQUEST });
    try {
      // console.log(values)
      const { data } = await typeblogAPI.updateTypeBlog(values);
      const  list  = await typeblogAPI.getTypeBLogs();
      dispatch({ type: UPDATE_TYPEBLOG_SUCCESS, payload: list.data });

    } catch (error) {
      dispatch({
        type: UPDATE_TYPEBLOG_FAILURE,
        payload: { error: error.response.data.message },
      });
    }
  };
}

export function DeletedTypeBlog(values) {
  return async (dispatch) => {
    dispatch({ type: DELETE_TYPEBLOG_REQUEST });
    try {
      // console.log(values,listTypeBlogs)
      const { data } = await typeblogAPI.deleteTypeBlog(values);
      const  list  = await typeblogAPI.getTypeBLogs();

      dispatch({ type: DELETE_TYPEBLOG_SUCCESS, payload: list.data });
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
        type: DELETE_TYPEBLOG_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}

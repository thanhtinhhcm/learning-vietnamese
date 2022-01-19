import {
  GET_LESSIONS_REQUEST,
  GET_LESSIONS_SUCCESS,
  GET_LESSIONS_FAILURE,
  CREATE_LESSIONS_REQUEST,
  CREATE_LESSIONS_SUCCESS,
  CREATE_LESSIONS_FAILURE,
  DELETE_LESSIONS_REQUEST,
  DELETE_LESSIONS_SUCCESS,
  DELETE_LESSIONS_FAILURE,
  GET_LESSION_REQUEST,
  GET_LESSION_SUCCESS,
  GET_LESSION_FAILURE,
  UPDATE_LESSION_REQUEST,
  UPDATE_LESSION_SUCCESS,
  UPDATE_LESSION_FAILURE
} from "../constants/lessions";
import LessionsAPI from "../services/lessionsAPI";
import Swal from "sweetalert2";
// import 'sweetalert2/src/sweetalert2.scss'

export function getAllLession() {
  return async (dispatch) => {
    dispatch({ type: GET_LESSIONS_REQUEST });
    try {
      const { data } = await LessionsAPI.getAll();
      dispatch({ type: GET_LESSIONS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_LESSIONS_FAILURE,
        payload: { error: error.response?.data?.message },
      });
    }
  };
}
export function CreateLession(values, history) {
  return async (dispatch) => {
    dispatch({ type: CREATE_LESSIONS_REQUEST });
    try {
    
      // console.log(values)
      const { data } = await LessionsAPI.createLession(values);
      Swal.fire({
        // position: 'top-end',
        icon: "success",
        title: "User added success",
        // showConfirmButton: false,
        confirmButtonText: "OK",
        timer: 1500,
      });

      dispatch({ type: CREATE_LESSIONS_SUCCESS, payload: { ...data } });

      setTimeout(() => {
        history.push("/admin/lessions");
      }, 1500);
      // console.log("vo ddaay lay do choi ")
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
      dispatch({
        type: CREATE_LESSIONS_FAILURE,
        payload: { error: error.response.data.message },
      });
    }
  };
}
export function DeleteLession(id, listLesion) {
  return async (dispatch) => {
    dispatch({ type: DELETE_LESSIONS_REQUEST });
    try {
      // console.log(id,listLesion)
      const { data } = await LessionsAPI.deleteLession(id);
      const index = listLesion.findIndex(
        (listLesion) => listLesion.lession_id === id
      );
      if (index) {
        const removed = listLesion.splice(index, 1);
        dispatch({ type: DELETE_LESSIONS_SUCCESS, payload: listLesion });
        Swal.fire({
          // position: 'top-end',
          icon: "success",
          title: "Deleted success",
          // showConfirmButton: false,
          confirmButtonText: "OK",
          timer: 1500,
        });
      }
    } catch (error) {
      dispatch({
        type: DELETE_LESSIONS_FAILURE,
        payload: { error: error.response.data.message },
      });
    }
  };
}
export function GetOneLession(values) {
  return async (dispatch) => {
    dispatch({ type: GET_LESSION_REQUEST });
    try {

      if(Number(values)){
        const { data } = await LessionsAPI.GetLession(values);
      
        let array = [];
          let result = Object.keys(data).map((key) => {
            // console.log(listTypeBlogs[key])
            array.push(data[key]);
          });
  
        dispatch({ type: GET_LESSION_SUCCESS, payload: array[0] });
      }
     
    } catch (error) {
      dispatch({
        type: GET_LESSION_FAILURE,
        payload: { error: error.response?.data?.message },
      });
    }
  };
}
// UpdateLession
  export function UpdateLession(values,history) {
    return async (dispatch) => {
      dispatch({ type: UPDATE_LESSION_REQUEST });
      try {
        const { data } = await LessionsAPI.updateLession(values);

        Swal.fire({
          icon: "success",
          title: "Update success",
          confirmButtonText: "OK",
          timer: 1500,
        });
        setTimeout(() => {
          const url = "/admin/detail_lession/"+values.lession_id;
          history.push(url);
        }, 1500);

      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.sqlMessage,
        });
        dispatch({
          type: UPDATE_LESSION_FAILURE,
          payload: { error: error.response.data.sqlMessage },
        });
      }
    };
  }

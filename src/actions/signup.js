import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/signup";
import signupAPI from "../services/signupAPI";
import Swal from 'sweetalert2'

export function signup(values,history) {
  return async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    
    try {
      const { data } = await signupAPI.signup(values);
      dispatch({ type: SIGNUP_SUCCESS, payload: { data } });
      
      setTimeout(() => {
        history.push("/login");
      }, 2000);

      const Swal = require('sweetalert2')
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        // showConfirmButton: false,
        confirmButtonText: 'OK',
        timer: 1500
      })

    } catch (error) {
      //   const Swal = require('sweetalert2')
      Swal.fire({
        title: 'Error!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Cancel'
      })
      dispatch({
        type: SIGNUP_FAILURE,
        payload: { error: error.response.data.message },
      });
    }
  };
}

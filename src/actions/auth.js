import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
} from "../constants/auth";
import authAPI from "../services/authAPI";
// import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

export function login(values,history) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(values);
      // lưu thông tin đăng nhập xuống local storage để giữ trạng thái đăng nhập khi user tắt trang web
      localStorage.setItem("access_token", JSON.stringify(data));
      dispatch({ type: LOGIN_SUCCESS, payload: { ...data } });

      setTimeout(() => {
        history.push("/profile");
      }, 3000);
      // const Swal = require('sweetalert2')
      // Swal.fire({
      //   title: 'Error!',
      //   text: 'Do you want to continue',
      //   icon: 'error',
      //   confirmButtonText: 'Cool'
      // })
   
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data.message },
      });
    }
  };
}


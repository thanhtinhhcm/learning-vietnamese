  import {
    PROFILE_FAILURE,
    PROFILE_SUCCESS,
    PROFILE_REQUEST,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
  } from "../constants/auth";
  import authAPI from "../services/authAPI";
  // import Swal from 'sweetalert2'
  
  export function getProfile(history) {
    return async (dispatch) => {
      dispatch({ type: PROFILE_REQUEST });
      try {
        const { data } = await authAPI.profile();
        // lưu thông tin đăng nhập xuống local storage để giữ trạng thái đăng nhập khi user tắt trang web
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        dispatch({ type: PROFILE_SUCCESS, payload: { ...data } });
        // if(data){
        //   if(data&&data.user.role==="admin"){
        //     history.push("/admin")
        //   }
        // }

     
      } catch (error) {
        // console.log({...error});
        dispatch({
          type: PROFILE_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  }

  export function logOut(history) {
    return async (dispatch) => {
      dispatch({ type: LOGOUT_REQUEST });
      try {
        // const { data } = await authAPI.profile();
        // // lưu thông tin đăng nhập xuống local storage để giữ trạng thái đăng nhập khi user tắt trang web
        // localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch({ type: LOGOUT_SUCCESS});
       
        // console.log(history)
        window.location.reload();
     
      } catch (error) {
        // console.log({...error});
        dispatch({
          type: LOGOUT_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  }
  
  

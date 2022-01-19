import {
    GET_LIST_USER_FAILURE,
    GET_LIST_USER_SUCCESS,
    GET_LIST_USER__REQUEST,
    
    CREATE_USER__REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,

    DELETE_USER__REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,

    UPDATE_USER__REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,

    PROFILE_USER_REQUEST,
    PROFILE_USER_SUCCESS,
    PROFILE_USER_FAILURE


  } from "../constants/auth";
  import UserAPI from "../services/users.API";
  import Swal from 'sweetalert2'
  
  export function getListUser(history) {
    return async (dispatch) => {
      dispatch({ type: GET_LIST_USER__REQUEST });
      try {
        const { data } = await UserAPI.getUsers();
        // lưu thông tin đăng nhập xuống local storage để giữ trạng thái đăng nhập khi user tắt trang web
        localStorage.setItem("list_userInfo", JSON.stringify({...data}));
        dispatch({ type: GET_LIST_USER_SUCCESS, payload: { ...data } });
        // if(data){
        //   if(data&&data.user.role==="admin"){
        //     history.push("/admin")
        //   }
        // }

     
      } catch (error) {
        // console.log({...error});
        dispatch({
          type: GET_LIST_USER_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  }

  export function createUser(values) {
    return async (dispatch) => {
      dispatch({ type: CREATE_USER__REQUEST });
      try {
        const { data } = await UserAPI.createUsers(values);
        // lưu thông tin đăng nhập xuống local storage để giữ trạng thái đăng nhập khi user tắt trang web
        const list_userInfo = localStorage.getItem("list_userInfo")
        ? JSON.parse(localStorage.getItem("list_userInfo"))
        : null;
        list_userInfo.items.push(data);
        localStorage.setItem("list_userInfo", JSON.stringify(list_userInfo));

        dispatch({ type: CREATE_USER_SUCCESS, payload: { ...data } });

        const Swal = require('sweetalert2')
        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: 'User added success',
          // showConfirmButton: false,
          confirmButtonText: 'OK',
          timer: 1500
        })
        // if(data){
        //   if(data&&data.user.role==="admin"){
        //     history.push("/admin")
        //   }
        // }

     
      } catch (error) {
        // console.log({...error});
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Cancel'
        })
        dispatch({
          type: CREATE_USER_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  }

  export function deleteUser(values) {
    return async (dispatch) => {
      dispatch({ type: DELETE_USER__REQUEST });
      try {
        // console.log(values);
        const { data } = await UserAPI.deleteUser(values);
        // // lưu thông tin đăng nhập xuống local storage để giữ trạng thái đăng nhập khi user tắt trang web
        const list_userInfo = localStorage.getItem("list_userInfo")
        ? JSON.parse(localStorage.getItem("list_userInfo"))
        : null;
        if(list_userInfo){
          // const list_user = list_userInfo.items;
          const index = list_userInfo.items.findIndex(user => user.id === values);
          if(index){
            const removed = list_userInfo.items.splice(index, 1);
            localStorage.setItem("list_userInfo", JSON.stringify(list_userInfo));
            dispatch({ type: DELETE_USER_SUCCESS, payload: list_userInfo });
          }
        }
        // list_userInfo.items.push(data);
        // localStorage.setItem("list_userInfo", JSON.stringify(list_userInfo));

        // dispatch({ type: DELETE_USER_SUCCESS, payload: { ...data } });

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
       

     
      } catch (error) {
        // console.log({...error});
        
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Cancel'
        })
        dispatch({
          type: DELETE_USER_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  }

  export function updateUser(values) {
    return async (dispatch) => {
      dispatch({ type: UPDATE_USER__REQUEST });
      try {
        const { data } = await UserAPI.updateUser(values);
        // lưu thông tin đăng nhập xuống local storage để giữ trạng thái đăng nhập khi user tắt trang web
        const list_userInfo = localStorage.getItem("list_userInfo")
        ? JSON.parse(localStorage.getItem("list_userInfo"))
        : null;
        if(list_userInfo){
          // const list_user = list_userInfo.items;
          const index = list_userInfo.items.findIndex(user => user.id === values.id);
          if(index){
            // const removed = list_userInfo.items.splice(index, 1,values );
            const edit = list_userInfo.items.map((user) => {
                if(user.id === values.id){
                  user.blocked_user =  values.blocked_user
                  user.email =  values.email
                  user.name =  values.name
                  user.role =  values.role
                  user.username =  values.username
                }
            })
            localStorage.setItem("list_userInfo", JSON.stringify(list_userInfo));
            dispatch({ type: DELETE_USER_SUCCESS, payload: list_userInfo });
          }
        }

        dispatch({ type: UPDATE_USER_SUCCESS, payload: { ...data } });

        const Swal = require('sweetalert2')
        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: 'User edit success',
          // showConfirmButton: false,
          confirmButtonText: 'OK',
          timer: 1500
        })


     
      } catch (error) {
        // console.log({...error});
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Cancel'
        })
        dispatch({
          type: UPDATE_USER_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  }

  export function getUserInfo(id) {
    return async (dispatch) => {
      dispatch({ type: PROFILE_USER_REQUEST });
      try {
        
        // PROFILE_SUCCESS
        const { data } = await UserAPI.getUser(id);
        // console.log(data)
        dispatch({ type: PROFILE_USER_SUCCESS, payload: { data } });
     
      } catch (error) {
        // console.log({...error});
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Cancel'
        })
        dispatch({
          type: PROFILE_USER_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  }
import {
    GET_BLOGS_REQUEST,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_FAILURE,
    CREATE_BLOGS_REQUEST,
    CREATE_BLOGS_SUCCESS,
    CREATE_BLOGS_FAILURE,
    DELETE_BLOGS_REQUEST,
    DELETE_BLOGS_SUCCESS,
    DELETE_BLOGS_FAILURE,
    GET_BLOG_REQUEST,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAILURE,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAILURE
  } from "../constants/blogs";
  import BlogAPI from "../services/blogsAPI";
  import Swal from 'sweetalert2'
  // import 'sweetalert2/src/sweetalert2.scss'
  
  export function getAllBlogs() {
    return async (dispatch) => {
      dispatch({ type: GET_BLOGS_REQUEST });
      try {
        const { data } = await BlogAPI.getAll();
        dispatch({ type: GET_BLOGS_SUCCESS, payload: { data } });
  
     
      } catch (error) {
        dispatch({
          type: GET_BLOGS_FAILURE,
          payload: { error: error?.response?.data?.message },
        });
      }
    };
  }
  export function CreateBlogs(values,history) {
    return async (dispatch) => {
      dispatch({ type: CREATE_BLOGS_REQUEST });
      try {
        // console.log(values)
        const { data } = await BlogAPI.createBlogs(values);
        Swal.fire({
          // position: 'top-end',
          icon: "success",
          title: "User added success",
          // showConfirmButton: false,
          confirmButtonText: "OK",
          timer: 1500,
        });
        // window.reload();
        // console.log(data)
        // localStorage.setItem("access_token", JSON.stringify(data));
        dispatch({ type: CREATE_BLOGS_SUCCESS, payload: { ...data } });

        setTimeout(() => {
          history.push("/admin/blogs");
        }, 1500);
        // console.log("vo ddaay lay do choi ")
     
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
          // footer: '<a href="">Why do I have this issue?</a>'
        });
        dispatch({
          type: CREATE_BLOGS_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  }
  export function DeleteBlog(id,listblogs) {
    return async (dispatch) => {
      dispatch({ type: DELETE_BLOGS_REQUEST });
      try {
        const { data } = await BlogAPI.deleteBlogs(id);
        const index = listblogs.findIndex(listblog => listblog.blog_id === id);
        if(index){
          const removed = listblogs.splice(index, 1);
          dispatch({ type: DELETE_BLOGS_SUCCESS, payload: listblogs });
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
          type: DELETE_BLOGS_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  }
  export function GetOneBlog(values) {
    return async (dispatch) => {
      dispatch({ type: GET_BLOG_REQUEST });
      try {
        if(Number(values)){
            const { data } = await BlogAPI.GetBlog(values);
        // GET_BLOG_SUCCESS
        let array = [];
       Object.keys(data).map((key) => {
          array.push(data[key]);
        });
        dispatch({ type: GET_BLOG_SUCCESS, payload: array[0] });
        }
        else {
        }
      } catch (error) {
        // console.log({...error})
        dispatch({
          type: GET_BLOG_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  }
  
  export function UpdateBlogs(values,history) {
    return async (dispatch) => {
      dispatch({ type: UPDATE_BLOG_REQUEST });
      try {
        // console.log(values)
        const { data } = await BlogAPI.updateBlogs(values);
        Swal.fire({
          // position: 'top-end',
          icon: "success",
          title: "Update success",
          // showConfirmButton: false,
          confirmButtonText: "OK",
          timer: 1500,
        });
        
        // dispatch({ type: UPDATE_BLOG_SUCCESS, payload: { ...data } });

        setTimeout(() => {
          const url = "/admin/detail_blog/"+values.blog_id;
          history.push(url);
        }, 1500);
     
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.sqlMessage,
        });
        dispatch({
          type: UPDATE_BLOG_FAILURE,
          payload: { error: error.response.data.sqlMessage },
        });
      }
    };
  }
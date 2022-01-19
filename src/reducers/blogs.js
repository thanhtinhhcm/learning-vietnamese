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
    GET_BLOG_FAILURE
  } from "../constants/blogs";
  
  // lấy dữ liệu từ localStorage lên bằng cách kiểm tra xem nó có tồn tại trong localStorage hay chưa
 
let listblogs = [];
let blog = {};

  const initialState = {
    listblogs,
    blog,
    isLoading: false,
    error: null,
    stastus:  null,
  };
  
  function blogsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BLOGS_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_BLOGS_SUCCESS: {
        return { ...state, isLoading: false, listblogs: action.payload.data };
      }
      case GET_BLOGS_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      case CREATE_BLOGS_REQUEST: {
        return { ...state, isLoading: true, stastus: null, error: null };
      }
      case CREATE_BLOGS_SUCCESS: {
        return { ...state, isLoading: false, stastus: true };
      }
      case CREATE_BLOGS_FAILURE: {
        return { ...state, isLoading: false, stastus: false ,error: action.payload.error };
      }

      case DELETE_BLOGS_REQUEST: {
        return { ...state, isLoading: true, stastus: null, error: null };
      }
      case DELETE_BLOGS_SUCCESS: {
        return { ...state, isLoading: false, listblogs: action.payload};
      }
      case DELETE_BLOGS_FAILURE: {
        return { ...state, isLoading: false, stastus: false ,error: action.payload.error };
      }

      case GET_BLOG_REQUEST: {
        return { ...state, isLoading: true, stastus: null, error: null };
      }
      case GET_BLOG_SUCCESS: {
        return { ...state, isLoading: false, blog: action.payload};
      }
      case GET_BLOG_FAILURE: {
        return { ...state, isLoading: false, stastus: false ,error: action.payload.error };
      }
      


      
      default:
        return state;
    }
  }
  
  export default blogsReducer;
  
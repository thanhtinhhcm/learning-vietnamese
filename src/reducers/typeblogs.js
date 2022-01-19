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

// lấy dữ liệu từ localStorage lên bằng cách kiểm tra xem nó có tồn tại trong localStorage hay chưa

let listTypeBlogs = {};

const initialState = {
  listTypeBlogs,
  isLoading: false,
  error: null,
};

function blogsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TYPEBLOG_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_TYPEBLOG_SUCCESS: {
      return { ...state, isLoading: false, listTypeBlogs: action.payload };
    }
    case GET_TYPEBLOG_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    case CREATE_TYPEBLOG_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case CREATE_TYPEBLOG_SUCCESS: {
      return { ...state, isLoading: false, listTypeBlogs: action.payload };
    }
    case CREATE_TYPEBLOG_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    case UPDATE_TYPEBLOG_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case UPDATE_TYPEBLOG_SUCCESS: {
      return { ...state, isLoading: false, listTypeBlogs: action.payload };
    }
    case UPDATE_TYPEBLOG_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    case DELETE_TYPEBLOG_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case DELETE_TYPEBLOG_SUCCESS: {
      return { ...state, isLoading: false, listTypeBlogs: action.payload };
    }
    case DELETE_TYPEBLOG_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    default:
      return state;
  }
}

export default blogsReducer;

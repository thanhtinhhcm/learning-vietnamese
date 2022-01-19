import { 
    PROFILE_FAILURE, 
    PROFILE_SUCCESS, 
    PROFILE_REQUEST,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
  } from "../constants/auth";
  
  // lấy dữ liệu từ localStorage lên bằng cách kiểm tra xem nó có tồn tại trong localStorage hay chưa
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const initialState = {
    userInfo,
    isLoading: false,
    error: null,
  };
  
  function profileReducer(state = initialState, action) {
    switch (action.type) {
      case PROFILE_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case PROFILE_SUCCESS: {
        return { ...state, isLoading: false, userInfo: action.payload.user };
      }
      case PROFILE_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      case LOGOUT_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case LOGOUT_SUCCESS: {
        return { ...state, isLoading: false, userInfo: null };
      }
      case LOGOUT_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }

      default:
        return state;
    }
  }
  
  export default profileReducer;
  
import { 
    GET_LIST_USER__REQUEST,
    GET_LIST_USER_SUCCESS,
    GET_LIST_USER_FAILURE,
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
  
  // lấy dữ liệu từ localStorage lên bằng cách kiểm tra xem nó có tồn tại trong localStorage hay chưa
  const list_userInfo = localStorage.getItem("list_userInfo")
    ? JSON.parse(localStorage.getItem("list_userInfo"))
    : null;
  let userInfo = {};
  const initialState = {
    userInfo,
    list_userInfo,
    isLoading: false,
    error: null,
  };
  
  function listUserReducer(state = initialState, action) {
    switch (action.type) {
      case GET_LIST_USER__REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_LIST_USER_SUCCESS: {
        return { ...state, isLoading: false, list_userInfo: action.payload };
      }
      case GET_LIST_USER_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      // Create User
      case CREATE_USER__REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case CREATE_USER_SUCCESS: {
        list_userInfo.items.push(action.payload);

        return { ...state, isLoading: false, list_userInfo: list_userInfo };
      }
      case CREATE_USER_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      // Delete User 
      case DELETE_USER__REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case DELETE_USER_SUCCESS: {
        // list_userInfo.items.push(action.payload);

        return { ...state, isLoading: false, list_userInfo: action.payload };
      }
      case DELETE_USER_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }

      case UPDATE_USER__REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case UPDATE_USER_SUCCESS: {
        return { ...state, isLoading: false, list_userInfo: null };
      }
      case UPDATE_USER_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      case PROFILE_USER_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case PROFILE_USER_SUCCESS: {
        // console.log(action)
        return { ...state, isLoading: false, userInfo: action.payload.data };
      }
      case PROFILE_USER_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
  }
}
  
  export default listUserReducer;
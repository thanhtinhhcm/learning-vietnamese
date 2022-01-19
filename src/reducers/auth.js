import { 
  LOGIN_FAILURE, 
  LOGIN_SUCCESS, 
  LOGIN_REQUEST 
} from "../constants/auth";

// lấy dữ liệu từ localStorage lên bằng cách kiểm tra xem nó có tồn tại trong localStorage hay chưa
const accessToken = localStorage.getItem("access_token")
  ? JSON.parse(localStorage.getItem("access_token"))
  : null;
const initialState = {
  accessToken,
  isLoading: false,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, accessToken: action.payload.data };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default authReducer;

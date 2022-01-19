import {
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
} from "../constants/signup";
  
const initialState = {
  userInfo,
  isLoading: false,
  error: null,
};

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, isLoading: false, userInfo: action.payload.data };
    }
    case SIGNUP_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default signupReducer;

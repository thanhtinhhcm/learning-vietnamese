import {
    GET_LESSIONS_REQUEST,
    GET_LESSIONS_SUCCESS,
    GET_LESSIONS_FAILURE,
    CREATE_LESSIONS_REQUEST,
    CREATE_LESSIONS_SUCCESS,
    CREATE_LESSIONS_FAILURE,
    DELETE_LESSIONS_REQUEST,
    DELETE_LESSIONS_SUCCESS,
    DELETE_LESSIONS_FAILURE,
    GET_LESSION_REQUEST,
    GET_LESSION_SUCCESS,
    GET_LESSION_FAILURE,
    UPDATE_LESSION_REQUEST,
    UPDATE_LESSION_SUCCESS,
    UPDATE_LESSION_FAILURE
  } from "../constants/lessions";
  
  // lấy dữ liệu từ localStorage lên bằng cách kiểm tra xem nó có tồn tại trong localStorage hay chưa


  const initialState = {
    listLesion: [],
    lession: {},
    isLoading: false,
    error: null,
    stastus:  null,
  };
  
  function lessionsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_LESSIONS_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case GET_LESSIONS_SUCCESS: {
        return { ...state, isLoading: false, listLesion: action.payload };
      }
      case GET_LESSIONS_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }

      case CREATE_LESSIONS_REQUEST: {
        return { ...state, isLoading: true, stastus: null, error: null };
      }
      case CREATE_LESSIONS_SUCCESS: {
        return { ...state, isLoading: false, stastus: true };
      }
      case CREATE_LESSIONS_FAILURE: {
        return { ...state, isLoading: false, stastus: false ,error: action.payload.error };
      }

      case DELETE_LESSIONS_REQUEST: {
        return { ...state, isLoading: true, stastus: null, error: null };
      }
      case DELETE_LESSIONS_SUCCESS: {
        return { ...state, isLoading: false, listLesion: action.payload};
      }
      case DELETE_LESSIONS_FAILURE: {
        return { ...state, isLoading: false, stastus: false ,error: action.payload.error };
      }

      case GET_LESSION_REQUEST: {
        return { ...state, isLoading: true, stastus: null, error: null };
      }
      case GET_LESSION_SUCCESS: {
        return { ...state, isLoading: false, lession: action.payload};
      }
      case GET_LESSION_FAILURE: {
        return { ...state, isLoading: false, stastus: false ,error: action.payload.error };
      }
      
      case UPDATE_LESSION_REQUEST: {
        return { ...state, isLoading: true, stastus: null, error: null };
      }
      case UPDATE_LESSION_SUCCESS: {
        return { ...state, isLoading: false, listLesion: action.payload};
      }
      case UPDATE_LESSION_FAILURE: {
        return { ...state, isLoading: false, stastus: false ,error: action.payload.error };
      }
      
      default:
        return state;
    }
  }
  
  export default lessionsReducer;
  
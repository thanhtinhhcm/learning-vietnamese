// Course reducer
import {
  GET_COURSES_FAILURE,
  GET_COURSES_SUCCESS,
  GET_COURSES_REQUEST,
  GET_COURSE_FAILURE,
  GET_COURSE_SUCCESS,
  GET_COURSE_REQUEST,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAILURE,
  UPDATE_COURSE_REQUEST,
  UPDATE_COURSE_SUCCESS,
  UPDATE_COURSE_FAILURE,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAILURE,
} from "../constants/courses";

const initialState = {
  course: {},
  courses: [],
  isLoading: false,
  error: null,
};

function courseReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_COURSES_SUCCESS: {
      return { ...state, courses: action.payload, isLoading: false };
    }
    case GET_COURSES_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    case GET_COURSE_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_COURSE_SUCCESS: {
      return { ...state, course: action.payload, isLoading: false };
    }
    case GET_COURSE_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    case CREATE_COURSE_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case CREATE_COURSE_SUCCESS: {
      return { ...state, isLoading: false, courses: action.payload };
    }
    case CREATE_COURSE_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    case UPDATE_COURSE_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case UPDATE_COURSE_SUCCESS: {
      return { ...state, isLoading: false, courses: action.payload };
    }
    case UPDATE_COURSE_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    case DELETE_COURSE_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case DELETE_COURSE_SUCCESS: {
      return { ...state, isLoading: false, courses: action.payload };
    }
    case DELETE_COURSE_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }

    default:
      return state;
  }
}

export default courseReducer;

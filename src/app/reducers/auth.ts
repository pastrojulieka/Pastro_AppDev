import {
  USER_LOGIN_COMPLETED,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESET,
  USER_LOGIN,
  USER_REGISTER_COMPLETED,
  USER_REGISTER_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER,
  USER_LOGOUT,
} from '../sagas/actions';

const INITIAL_STATE = {
  data: null,
  isLoading: false,
  isError: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        data: null,
        isLoading: true,
        isError: false,
      };

    case USER_LOGIN_COMPLETED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };

    case USER_LOGIN_ERROR:
      return {
        data: null,
        isLoading: false,
        isError: true,
      };

    case USER_LOGIN_RESET:
      return INITIAL_STATE;

    case USER_LOGOUT:
      return INITIAL_STATE;

    case USER_REGISTER_REQUEST:
      return {
        ...state,
        data: null,
        isLoading: true,
        isError: false,
      };

    case USER_REGISTER_COMPLETED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };

    case USER_REGISTER_ERROR:
      return {
        data: null,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
}
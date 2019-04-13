import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import { 
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILED,
 } from '../constants/clientConstants';

const initialState = {
  loading: false,
  currentUser: null,
  errors: null,
}

const currentUser = (currentUser, action) => {
  if (action.type === 'USER_LOGOUT_SUCCESS'){
    return null
  }
  return currentUser ? currentUser : null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loading: true,
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.data.current_user
      }
    case USER_LOGIN_FAILED:
      return {
        ...state,
        errors: action.data.error
      }
      case USER_SIGNUP:
      return {
        ...state,
        loading: true,
      }
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case USER_SIGNUP_FAILED:
      return {
        ...state,
        errors: action.data.errors
      }
    case USER_LOGOUT:
      return {
        ...state,
        loading: true,
      }
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: null,
      }
    case USER_LOGOUT_FAILED:
      return {
        ...state,
      }    
    default:
      return state;
  }
};

const clientReducer = combineReducers({ 
  authReducer,
  form,
  currentUser,
});

export default clientReducer;

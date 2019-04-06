/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { 
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
} from '../constants/clientConstants';
import ReactOnRails from 'react-on-rails';
axios.defaults.headers.common['X-CSRF-Token'] = ReactOnRails.authenticityToken()
axios.defaults.headers.post['Content-Type'] = "application/json"

export const userLogInInit = () => ({
  type: USER_LOGIN,
});

export const userLogInSuccess = (response) => ({
  type: USER_LOGIN_SUCCESS,
  data: response
});

export const userLogInFailed = (response) => ({
  type: USER_LOGIN_FAILED,
  error: console.log(response)
});

export const userLogin = (params) => {
  return (dispatch) => {
    dispatch(userLogInInit())
    return axios.post('/users/sign_in', params).then((response) => {
      axios.defaults.headers.common['X-CSRF-Token'] = response.headers["x-csrf-token"]
      dispatch(userLogInSuccess(response.data))
    })
    .catch((error) => {
      dispatch(userLogInFailed(error.response))
    })
  }
};

export const userSignUpInit = () => ({
  type: USER_SIGNUP,
});

export const userSignUpSuccess = (response) => ({
  type: USER_SIGNUP_SUCCESS,
  data: response
});

export const userSignUpFailed = (response) => ({
  type: USER_SIGNUP_FAILED,
  error: console.log(response)
});

export const userSignUp = (params) => {
  return (dispatch) => {
    dispatch(userSignUpInit())
    return axios.post('/users', params).then((response) => {
      axios.defaults.headers.common['X-CSRF-Token'] = response.headers["x-csrf-token"]
      dispatch(userSignUpSuccess(response.data))
    })
    .catch((error) => {
      dispatch(userSignUpFailed(error.response))
    })
  }
};
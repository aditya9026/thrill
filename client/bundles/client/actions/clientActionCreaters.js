/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { 
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED
} from '../constants/clientConstants';

axios.defaults.headers.common['X-CSRF-Token'] = ReactOnRails.authenticityToken()
axios.defaults.headers.post['Content-Type'] = "application/json"

export const userLogInInit = () => ({
  type: USER_LOGIN,
});

export const userLogInSuccess = (response) => ({
  type: USER_LOGIN,
  data: response
});

export const userLogInFailed = (response) => ({
  type: USER_LOGIN,
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
      dispatch(userLogInFailed(error.response.data))
    })
  }
};
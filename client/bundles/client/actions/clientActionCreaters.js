/* eslint-disable import/prefer-default-export */
import axios from "axios";
import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILED
} from "../constants/clientConstants";
import ReactOnRails from "react-on-rails";

axios.defaults.headers.common[
  "X-CSRF-Token"
] = ReactOnRails.authenticityToken();
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

export const userSignUpInit = () => ({
  type: USER_SIGNUP
});

export const userSignUpSuccess = data => ({
  type: USER_SIGNUP_SUCCESS,
  data: data
});

export const userSignUpFailed = data => ({
  type: USER_SIGNUP_FAILED,
  data: data
});

export const userSignUp = params => {
  return dispatch => {
    dispatch(userSignUpInit());
    return axios
      .post("/", { user: params })
      .then(response => {
        axios.defaults.headers.common["X-CSRF-Token"] =
          response.headers["x-csrf-token"];
        dispatch(userSignUpSuccess(response.data));
      })
      .catch(error => {
        dispatch(userSignUpFailed(error.response.data));
      });
  };
};

export const userLogInInit = () => ({
  type: USER_LOGIN
});

export const userLogInSuccess = data => ({
  type: USER_LOGIN_SUCCESS,
  data: data
});

export const userLogInFailed = data => ({
  type: USER_LOGIN_FAILED,
  data: data
});

export const userLogin = params => {
  return dispatch => {
    dispatch(userLogInInit());
    return axios
      .post("/sign_in", { user: params })
      .then(response => {
        axios.defaults.headers.common["X-CSRF-Token"] =
          response.headers["x-csrf-token"];
        dispatch(userLogInSuccess(response.data));
      })
      .catch(error => {
        dispatch(userLogInFailed(error.response.data));
      });
  };
};

export const userLogOutInit = () => ({
  type: USER_LOGOUT
});

export const userLogOutSuccess = data => ({
  type: USER_LOGOUT_SUCCESS,
  data: data
});

export const userLogOutFailed = data => ({
  type: USER_LOGOUT_FAILED,
  data: data
});

export const userLogOut = () => {
  return dispatch => {
    dispatch(userLogOutInit());
    return axios
      .delete("/sign_out")
      .then(response => {
        dispatch(userLogOutSuccess(response));
      })
      .catch(error => {
        dispatch(userLogOutFailed(error));
      });
  };
};

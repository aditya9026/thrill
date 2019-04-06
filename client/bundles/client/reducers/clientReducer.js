import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import { USER_LOGIN } from '../constants/clientConstants';

const initialState = {
  loading: false
}
const currentUser = (currentUser) => {
  return { currentUser: currentUser }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loading: true
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

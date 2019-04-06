import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import { TEST } from '../constants/clientConstants';

const rails_props = (state = '', action) => {
  switch (action.type) {
    case TEST:
      return action.text;
    default:
      return state;
  }
};

const clientReducer = combineReducers({ rails_props, form });

export default clientReducer;

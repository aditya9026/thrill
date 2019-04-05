import { combineReducers } from 'redux';
import { TEST } from '../constants/clientConstants';

const rails_props = (state = '', action) => {
  switch (action.type) {
    case TEST:
      return action.text;
    default:
      return state;
  }
};

const clientReducer = combineReducers({ rails_props });

export default clientReducer;

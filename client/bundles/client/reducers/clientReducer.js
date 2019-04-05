import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/clientConstants';

const rails = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const clientReducer = combineReducers({ rails });

export default clientReducer;

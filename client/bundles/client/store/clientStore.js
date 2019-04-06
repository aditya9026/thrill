import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import clientReducer from '../reducers/clientReducer';

const configureStore = (props) => (
  createStore(clientReducer, props, applyMiddleware(thunk))
);

export default configureStore;

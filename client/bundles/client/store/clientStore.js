import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import clientReducer from '../reducers/clientReducer';

const configureStore = (railsProps) => (
  createStore(clientReducer, railsProps, applyMiddleware(thunk))
);

export default configureStore;

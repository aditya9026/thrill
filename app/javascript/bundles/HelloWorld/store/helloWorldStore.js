import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import helloWorldReducer from '../reducers/helloWorldReducer';

const configureStore = (railsProps) => (
  createStore(helloWorldReducer, railsProps, applyMiddleware(thunk))
);

export default configureStore;

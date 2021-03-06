import { createStore, applyMiddleware } from 'redux';
import myReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  myReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;

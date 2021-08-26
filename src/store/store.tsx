import { combineReducers, createStore } from 'redux';
import city from './city';

const reducer = combineReducers({
  city,
});

export default createStore(
  reducer, 
);

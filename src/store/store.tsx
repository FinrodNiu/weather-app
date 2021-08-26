import { combineReducers, createStore } from 'redux';
import city from './city';

// const reducer = (state, action) => ({
//   city: city(state.city, action),
// });

const reducer = combineReducers({
  city,
});

export default createStore(
  reducer, 
);

import { SET_CITY } from './type';

const DEFAULT_CITY = {
  name: 'Melbourne',
  id: 2158177,
};

const reducer = (state = DEFAULT_CITY, action: any) => {
  switch(action.type) {
    case SET_CITY:
      return action.city;
    
    default:
      return state;
  };
};

export default reducer;
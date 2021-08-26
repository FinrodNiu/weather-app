import { SET_CITY } from '../../type';

const setCity = (city: any) => ({
  type: SET_CITY,
  city,
});

export default setCity;

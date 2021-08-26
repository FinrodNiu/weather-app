import { SET_CITY } from '../../type';

// eslint-disable-next-line import/no-anonymous-default-export
export default (city: any) => ({
  type: SET_CITY,
  city,
});

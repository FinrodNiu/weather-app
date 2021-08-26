import OpenWeatherMap from '../../utils/OpenWeatherMap';

const getWeathers = (ids: string[]) => OpenWeatherMap.get('/group', {
  params: {
    id: ids.join(','),
  },
});

export default getWeathers;
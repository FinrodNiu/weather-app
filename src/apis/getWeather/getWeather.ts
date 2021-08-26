import OpenWeatherMap from '../../utils/OpenWeatherMap';

const getWeather = (id: string) => OpenWeatherMap.get('/weather', {
	params: {
		id,
	},
});

export default getWeather;
import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5';

const OpenWeatherMap = axios.create({
	baseURL,
});

const enrichRequestWithAppId = (config: AxiosRequestConfig) => {
	config.params.appid = '8dac59d6516ccb7762f161db9e5fac84';

	return config;
}

const enrichRequestWithCelsiusUnits = (config: AxiosRequestConfig) => {
	config.params.units = 'metric';

	return config;
};

OpenWeatherMap.interceptors.request.use(enrichRequestWithAppId);
OpenWeatherMap.interceptors.request.use(enrichRequestWithCelsiusUnits);

export default OpenWeatherMap;
export interface IWeatherDataWeather {
	id: number,
	main: string,
	description: string,
	icon: string,
};

export interface IWeatherDataMain {
	temp: number,
	feels_like: number,
	temp_min: number,
	temp_max: number,
	pressure: number,
	humidity: number,
};

export interface IWeatherDataWind {
	speed: number,
	deg: number,
};

export interface IWeatherData {
	id: string,
	name: string,
	main: IWeatherDataMain,
	wind: IWeatherDataWind,
	weather: IWeatherDataWeather[],
};

export interface IWeatherDataList {
	cnt: number,
	list: IWeatherData[],
};
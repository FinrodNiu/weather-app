import React from 'react';
import styles from './City.module.css';
import Temperature from '../../../Temperature';
import { IWeatherDataWeather } from '../../../../interfaces/weatherData';

interface ICityProps {
	name: string,
	weather: IWeatherDataWeather,
	temperature: number,
	onClick: React.MouseEventHandler,
}
const City: React.FC<ICityProps> = ({
	name,
	weather,
	temperature,
	onClick,
}) => (
	<button data-testid="CITY" className={styles.city} onClick={onClick}>
		<h3 data-testid="NAME" className={styles.name}>{name}</h3>
		<div data-testid="TEMP" className={styles.temperature}>
			<Temperature>{temperature}</Temperature>
		</div>
		<img 
			data-testid="WEATHER_ICON"
			className={styles.weather}
			src={`http://openweathermap.org/img/wn/${weather.icon}.png`} 
			alt={weather.description} 
		/>
	</button>
);

export default City;

import React, { Dispatch } from 'react';
import styles from './OtherCities.module.css';
import City from './components/City';
import getWeathers from '../../apis/getWeathers';
import classNames from 'classnames/bind';
import setCity from '../../store/city/actions/setCity';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ICity } from '../../interfaces/city';
import { IWeatherData, IWeatherDataList } from '../../interfaces/weatherData';

const cx = classNames.bind(styles);

export const CITIES = [{
	name: 'Melbourne',
	id: '2158177',
}, {
	name: 'Sydney',
	id: '2147714',
}, {
	name: 'Brisbane',
	id: '2174003',
}, {
	name: 'Perth',
	id: '2063523',
}, {  
	name: 'Adelaide',
	id: '1023656',
}, {  
	name: 'Hobart',
	id: '2163355',
}, {
	name: 'Darwin',
	id: '7839402',
}];

interface ICurrentProps {
	currentCity: ICity;
	onCityClick: any;
}

interface ICurrentState {
	data?: IWeatherDataList;
	loading: boolean;
	toggle: boolean;
}

class OtherCities extends React.Component<ICurrentProps, ICurrentState> {
	constructor(props: ICurrentProps) {
		super(props);

		this.state = {
			data: undefined,
			loading: true,
			toggle: false,
		}
	}

	componentDidMount() {
		this.getWeathers();
	}

	async getWeathers() {
		const ids = CITIES.map((c) => c.id);

		const { data } = await getWeathers(ids);

		this.setState({
			data,
			loading: false,
		});
	}

	render() {
		const { data, loading, toggle } = this.state;
		const { currentCity, onCityClick } = this.props; 

		return (
			<div data-testid="OTHER_CITIES" className={styles.otherCities}>
				{!toggle && (
					<button 
						className={styles.toggle} 
						onClick={() => this.setState((s) => ({ toggle: !s.toggle }))}
					>
						View More Cities ...
					</button>
				)}
				<div className={cx('container', { active: toggle })}>
					<h2 className={styles.header}>Other Cities</h2>
					{loading ? (
						<div className={styles.loading}>Loading...</div>
					) : (
						<div className={styles.cities}>
							{data?.list.map((item: IWeatherData) => {
								if (item.id === currentCity.id) {
									return null;
								}

								return (
									<City 
										key={item.id}
										name={item.name} 
										temperature={item.main.temp}
										weather={item.weather[0]} 
										onClick={() => onCityClick({
											id: item.id,
											name: item.name,
										})}
									/>
								)
							})}
						</div>
					)}
				</div>
			</div>
		)
	}
}

interface RootState {
	city: ICity;
}

const mapStateToProps = (state: RootState) => ({
	currentCity: state.city,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	onCityClick: (city: ICity) => dispatch(setCity(city)),
});

const OtherCitiesContainer = connect(
	mapStateToProps, 
	mapDispatchToProps,
)(OtherCities)

export default OtherCitiesContainer;
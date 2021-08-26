import React, { Dispatch } from 'react';
import styles from './OtherCities.module.css';
import City from './components/City';
import getWeathers from '../../apis/getWeathers';
import classNames from 'classnames/bind';
import setCity from '../../store/city/actions/setCity';
import { connect } from 'react-redux';
import { Action } from 'redux';

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
}];

interface ICurrentProps {
  currentCity: any;
  onCityClick: any;
}

interface ICurrentState {
  data: any;
  loading: boolean;
  toggle: boolean;
}

class OtherCities extends React.Component<ICurrentProps, ICurrentState> {
  constructor(props: ICurrentProps) {
    super(props);

    this.state = {
      data: null,
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
              {data.list.map((item: any) => {
                if (item.id === currentCity.id) {
                  return null;
                }

                return (
                  <City 
                    key={item.id}
                    name={item.name} 
                    temperature={parseInt(item.main.temp)}
                    weather={{ 
                      icon: item.weather[0].icon, 
                      description: item.weather[0].main,
                    }} 
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
  city: any;
}

const mapStateToProps = (state: RootState) => ({
  currentCity: state.city,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onCityClick: (city: any) => dispatch(setCity(city)),
});

const OtherCitiesContainer = connect(
  mapStateToProps, 
  mapDispatchToProps,
)(OtherCities)

export default OtherCitiesContainer;
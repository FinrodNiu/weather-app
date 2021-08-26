import React from 'react';
import styles from './App.module.css';
import Current from './components/Current';
import OtherCities from './components/OtherCities';


class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.weather}>
          <div>
            <Current />
          </div>
          <div className={styles.bottom}>
            <OtherCities />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

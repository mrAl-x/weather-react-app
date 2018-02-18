import React from 'react';

// SVGs
import sunnyIcon from '../../../media/svg/sun.svg'
import windIcon from '../../../media/svg/wind.svg'
import rainIcon from '../../../media/svg/rain.svg'

// Styles
import styles from './DayForecast.css';

const DayForecast = ({ wind, temperature, precipitation }) => (
	<main className={ styles.dayForecast }>
		<img src={sunnyIcon} alt="Sunny" className={ styles.dayWeatherIcon } />
		<div className={ styles.weatherDetails }>
			<figure className={ styles.dailyDataWrapper }>
				<img src={ windIcon } alt="Wind Speed" className={ styles.dailyIcon } />
				<figcaption className={ styles.dailyLabel }>
					{ `${wind} M/s` }
				</figcaption>
			</figure>
			<span className={ styles.weatherIcon_temperature }>
				{ temperature }
				<span className={ styles.weatherIcon_shadow }>
					{ temperature }
				</span>
			</span>
			<figure className={ styles.dailyDataWrapper }>
				<img src={ rainIcon } alt="Precipitation" className={ styles.dailyIcon } />
				<figcaption className={ styles.dailyLabel }>
					{ `${precipitation} M/s` }
				</figcaption>
			</figure>
		</div>
	</main>
);

export default DayForecast;

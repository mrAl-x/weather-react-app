import React from 'react';

import sunnyIcon from '../../../media/svg/sun.svg'
import windIcon from '../../../media/svg/wind.svg'
import rainIcon from '../../../media/svg/rain.svg'

// Styles
import styles from './DayForecast.css';

const DayForecast = ({ wind, temperature, precipitation }) => (
	<main className={ styles.DayForecast }>
		<img src={sunnyIcon} alt="Sunny" className={styles.dayWeatherIcon } />
		<div className={ styles.weatherDetails }>
			<figure>
				<img src={ windIcon } alt="Wind Speed" className={ styles.weatherIcon } />
				<figcaption>
					{ `${wind} M/s` }
				</figcaption>
			</figure>
			<span className={ styles.detailsIcon_temperature }>
				{ temperature }
				<span className={ styles.detailsIcon_shadow }>
					{ temperature }
				</span>
			</span>
			<figure>
				<img src={ rainIcon } alt="Precipitation" className={ styles.detailsIcon } />
				<figcaption>
					{ `${precipitation} M/s` }
				</figcaption>
			</figure>
		</div>
	</main>
);

export default DayForecast;

import React from 'react';
import PropTypes from 'prop-types';

import DayForecast from './day-forecast/DayForecast';

// Styles
import styles from './WeatherWidget.css';

const WeatherWidget = (props) => {
	const { children } = props;

	return (
		<section className={ styles.WeatherWidget }>
			<DayForecast
				wind={ 24 }
				temperature={ 24 }
				precipitation={ 34 } />
			{
				children && children.data.map((day, index) => {
					return <p key={ index }>{ day.icon }</p>
				})
			}
		</section>
	);
};

WeatherWidget.propTypes = {
	prop: PropTypes.object,
};

export default WeatherWidget;

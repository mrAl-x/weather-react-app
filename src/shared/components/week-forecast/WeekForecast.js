import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './WeekForecast.css';

const WeekForecast = (props) => {
	const { children } = props;

	return (
		<div className={ styles.WeekForecast }>
			{
				children && children.data.map((day, index) => {
					return <p key={ index }>{ day.icon }</p>
				})
			}
		</div>
	);
};

WeekForecast.propTypes = {
	prop: PropTypes.object,
};

export default WeekForecast;

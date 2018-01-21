import React, { Component } from 'react';
// Helpers
import { getWeatherData } from './shared/utils/helpers';
// Components
import InputText from './shared/components/input-text/InputText'
import WeekForecast from './shared/components/week-forecast/WeekForecast'
import madeByMeSvg from './shared/media/svg/madebyme.svg'
// Styles
import styles from './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			weather: null,
		};
	}

	componentWillMount() {
		getWeatherData().then((result) => this.setState({ weather: result }));
	}

	render() {
		return (
			<div className={ styles['Weather'] }>
				<header className={ styles['Weather_header'] }>
					<address>
						<a href="https://twitter.com/@mrAL_x"
							rel="author">
							<img src={ madeByMeSvg } alt="Made by @mrAl_x"/>
						</a>
					</address>
				</header>
				<main>
					<InputText />
					<WeekForecast>
						{ this.state.weather && this.state.weather.daily }
					</WeekForecast>
				</main>
			</div>
		);
	}
}

export default App;

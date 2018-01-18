import React, { Component } from 'react';
// Helpers
import { getWeatherData } from './shared/utils/helpers';
// Components
import InputText from './shared/components/input-text/InputText'
import WeekForecast from './shared/components/week-forecast/WeekForecast'

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
			<div className="App">
				<header className="App-header">
					<h1>Weather App</h1>
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

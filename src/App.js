import React, { Component } from 'react';
// Helpers
import { getWeatherData } from './shared/utils/helpers';
// Components
import Wallpaper from './shared/components/wallpaper/Wallpaper'
import InputText from './shared/components/input-text/InputText'
import WeatherWidget from './shared/components/weather-widget/WeatherWidget'
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
			<div className={ styles.weather }>
				<Wallpaper />
				<div className={ styles.mainWrapper }>
					<header className={ styles.header }>
						<address>
							<a href="https://twitter.com/@mrAL_x"
								rel="author">
								<img src={ madeByMeSvg } alt="Made by @mrAl_x" />
							</a>
						</address>
						<p className={ styles.intro }>
							A ReactJs
						</p>
						<h1 className={ styles.title }>
							Weather App
						</h1>
					</header>
					<main className={ styles.weatherSection }>
						<InputText />
						<WeatherWidget>
							{this.state.weather && this.state.weather.daily}
						</WeatherWidget>
						{console.log(this.state.weather)}
					</main>
				</div>
			</div>
		);
	}
}

export default App;

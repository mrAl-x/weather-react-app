export async function getWeatherData() {
	return await fetch('https://api.darksky.net/forecast/447ac2a1ead0cce2abbbef1ff0317b4a/37.8267,-122.4233').then((response) => {
		return response.json().then((result) => {
			return result;
		})
	});
}
export async function getWeatherData(address = 'New York') {
	return await fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=Ss12kr9WAgUzR8W7t3OcCNAp7gYintvn&location=${address}`)
		.then((response) => {
		return response.json().then((data) => {
			const results = data.results[0].locations[0];

			return fetchWeatherData(normalizeGeocodeResults(results).coordinates);
		})
	});
}

export async function fetchWeatherData(coordinates) {
	const { lat, lng } = coordinates;

	return await fetch(`https://api.darksky.net/forecast/447ac2a1ead0cce2abbbef1ff0317b4a/${lat},${lng}`)
		.then((response) => {
		return response.json().then((result) => {
			return result;
		})
	});
}

function normalizeGeocodeResults(data) {
	const geoCode = {
		country: data.adminArea1,
		city: data.adminArea5,
		coordinates: {
			lat: data.latLng.lat,
			lng: data.latLng.lng,
		}
	};

	return geoCode;
}
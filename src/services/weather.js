export async function getWeatherFrom(query = 'Goiânia') {
	return fetch(`/api/get-weather?q=${query}`).then((res) => res.json());
}

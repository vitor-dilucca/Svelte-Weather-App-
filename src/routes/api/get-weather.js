const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff2e7b6e27mshf571c7cc1c215c6p1d46dcjsn6656ca81a515',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function get(event) {
    console.log(event)
    // const query='Buenos Aires'
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		FETCH_OPTIONS
	);

	const data = await response.json();
	const { location, current } = data;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
	const { code, text } = condition;
	const body = {
		conditionCode: code,
		conditionText: text,
		country,
		localtime,
		locationName: name,
		humidity,
		isDay: is_day,
		feelslike: feelslike_c,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDir: wind_dir
	};

	return {
		status: 200,
		body
	};
}

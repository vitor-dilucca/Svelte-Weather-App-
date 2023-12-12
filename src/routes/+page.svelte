<script>
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ff2e7b6e27mshf571c7cc1c215c6p1d46dcjsn6656ca81a515',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};
	const weatherPromise = fetch(
		'https://weatherapi-com.p.rapidapi.com/current.json?q=Goiânia',
		options
	)
		.then((response) => response.json())
		.then((response) => {
			const { location, current } = response;
			const { country, localtime, name } = location;
			const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
			const { code, text } = condition;

			return {
				conditionCode: code,
				conditionText: text,
				country,
				localtime,
				name,
				humidity,
				isDay: is_day,
				feelslike: feelslike_c,
				temperature: temp_c,
				windSpeed: wind_kph,
				windDir: wind_dir
			};
		});
</script>

{#await weatherPromise then weather}
	<h1>
		{weather.conditionText}
	</h1>
{/await}

<h1>Pagina teste Svelte</h1>

<style>
	h1 {
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
</style>

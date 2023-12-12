<script>
	import Layout from '../routes/__layout.svelte';

	import {getWeatherFrom} from '../services/weather.js'
	const weatherPromise = getWeatherFrom()
</script>

{#await weatherPromise then weather}
	<h1>
		{weather.conditionText}
	</h1>
	<h2>{weather.temperature}°C</h2>
	<h3>{weather.conditionText}</h3>
	<h4>{weather.windSpeed}</h4>
{/await}

<style>
	h1{
		font-weight: 480;
		color: #333;
		text-transform: uppercase;
	}

</style>

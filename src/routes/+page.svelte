<script>
	import Layout from '../routes/__layout.svelte';

	import { getWeatherFrom } from '../services/weather.js';
	const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
	<h1>{weather.locationName}</h1>
	<h2>{weather.temperature}°C</h2>
	<h3>{weather.conditionText}</h3>
	<h4>{weather.windSpeed}</h4>
{/await}

<style>
	h1 {
		font-weight: 380;
		color: #333;
		text-transform: uppercase;
		padding:32px 0 16px 16px;
	}
	
	h2 {
		font-weight: 380;
		font-size: 64px;
		color: #333;
		text-transform: uppercase;
		padding:32px 0 0 0;
	}

	h3 {
		font-weight: 400;
		transform: rotate(-90deg);
		position: absolute;
		top: 56px;
		right: 12px;
	}
</style>

<div>
	<slot />
</div>

<style>
	:global(body) {
		background: #5b719b;
        display: grid;
        place-content: center;
        min-height: 100vh;
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

    :global(h1,h2,h3,h4,h5){
        margin:0px
    }

    div{
        aspect-ratio: 9/16;
        width: 400px;
        max-width: 100%;
        display: block;
        box-shadow: 0 0 10px 1px rgba(0,0,0,0.1);
        border-radius:8px
    }
</style>

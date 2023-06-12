<script>
	import Navbar from '../components/Navbar.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	// Create a store and update it when necessary...
	const theme = writable();
	$: theme.set('light');
	// ...and add it to the context for child components to access
	setContext('theme', theme);
</script>

<div class="app {$theme == 'dark' ? 'dark-background' : ''}">
	<div class="navbar">
		<Navbar />
	</div>
	<div class="navbar-separator" ></div>
	<main class="{$theme == 'dark' ? 'dark-background' : ''}">
		<slot />
	</main>
	<br>
	<br>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.dark-background {
		background-color: black;
	}

	.navbar {
		position: fixed;
		width: 100%;
		top: 0px;
		z-index: 999999;
	}
	.navbar-separator {
		height: 60px;
	}
	@media(max-width:660px) {
		.navbar-separator {
			height: 130px;
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

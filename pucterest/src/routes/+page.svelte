<script>
	import Pin from "../components/Pin.svelte";
	import LoadMore from "../components/LoadMore.svelte";
	import { getContext, onMount } from "svelte";
	import {data, loading, get} from "../store/images";
	onMount(() => {
		get();
	});
	export const theme = getContext("theme");
	export function toggleTheme() {
	  if ($theme == "light") {
		theme.set("dark");
	  } else {
		theme.set("light");
	  }
	}
  </script>
  
  <svelte:head>
	<title>Home</title>
	<meta name="home" content="Home page" />
  </svelte:head>
  
  {#if $loading}
	Loading: {$loading}
  {:else}
	<div>
	  <div class="pin_container {$theme == 'dark' ? 'dark-background' : ''}">
		{#each $data as image}
		  <Pin
			url="{image.urls.regular}"
			description="{image.description || image.alt_description}"
			user="{image.user}"
		  />
		{/each}
	  </div>
	  <LoadMore />
	  <br>
	  <br>
	</div>
  {/if}
  
  <style>
	.pin_container {
	  margin: 0;
	  padding: 0;
	  display: grid;
	  grid-template-columns: repeat(auto-fill, 250px);
	  grid-auto-rows: 10px;
	  justify-content: center;
	  background-color: white;
	}
  
	.dark-background {
	  background-color: black;
	}
  </style>
  
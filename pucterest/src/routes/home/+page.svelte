<script>
  import Pin from "./Pin.svelte";
  import fetchImage from "../../store/images.js";

  let url = "https://api.unsplash.com/photos/random?count=30";
  const [data, loading, error, get] = fetchImage(url);
  get;

</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

{#if $loading}
  Loading: {$loading}
{:else}
  <div>
    <div class="pin_container">
      {#each $data as image}
        <Pin
          url="{image.urls.regular}"
          description="A random image"
          size="small"
        />
      {/each}
    </div>
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

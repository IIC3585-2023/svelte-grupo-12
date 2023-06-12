<script>
  import { fly, fade } from "svelte/transition";
  import loading from "$lib/images/loading.png";
  export let url = "#";
  export let description = "";
  export let size = "";
  export let user = {};
  let image = true;
  const handleClick = () => {
    console.log("clicked");
    image = !image;
  };
  const cardSize = () => {
    if (size) {
      return size;
    }
    if (description.length < 100) return "card_small";
    if (description.length < 200) return "card_medium";
    return "card_large";
  };

  // https://svelte.dev/repl/26ba12b3fbd146eaaefc8b024a826da7?version=3.5.1
  const loaded = new Map();

  function lazy(node, data) {
		if (loaded.has(data.src)) {
			node.setAttribute('src', data.src);
		} else {
			// simulate slow loading network
			setTimeout(() => {
				const img = new Image();
				img.src = data.src;
				img.onload = () => {
					loaded.set(data.src, img);
					node.setAttribute('src', data.src); 
				};
			}, 2000);
		}

		return {
			destroy(){} // noop
		};
	}

</script>

<div class="card {cardSize()}" transition:fly={{ y: 200, duration: 2000 }}>
  {#if image}
    <img
      class="card_img"
      src={loading}
      alt={description}
      in:fade={{ delay: 100 }}
      on:click={handleClick}
      use:lazy="{{src: url}}"
    />
  {:else}
    <div
      class="card_description"
      on:click={handleClick}
      in:fade={{ delay: 100 }}
    >
      <a class="avatar">
        <div class="img">
          <img src={user.profile_image.small} alt={user.name} />
        </div>
      </a>
      {description}
    </div>
  {/if}
</div>

<style>
  .card {
    padding: 0;
    margin: 15px 10px;
    border-radius: 16px;
    background-color: rgb(190, 183, 183);
  }

  .card_small {
    grid-row-end: span 26;
  }

  .card_medium {
    grid-row-end: span 33;
  }

  .card_large {
    grid-row-end: span 45;
  }
  .card_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  .card:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .card_description {
    width: 100%;
    height: 100%;
    margin: 20px;
    word-wrap: break-word;
    max-width: -webkit-fill-available;
    max-height: -webkit-fill-available;
  }

  .avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar .img {
    height: 2rem;
    width: 2rem;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }

  .avatar .img img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>

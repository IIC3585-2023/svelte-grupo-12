<script>
  import logo from "$lib/images/pucterest.png";
  import { getContext } from "svelte";
  import { get } from "../store/images.js";
  // Retrieve theme store from context
  export const theme = getContext("theme");
  export function toggleTheme() {
    if ($theme == "light") {
      theme.set("dark");
    } else {
      theme.set("light");
    }
  }
  let search = "";
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      get(`https://api.unsplash.com/photos/random?count=30&query=${search}`);
    }
  };
</script>

<div class="pinterest {$theme == 'dark' ? 'dark-background' : ''}">
  <div class="left">
    <a href="#" class="logo">
      <img src={logo} alt="Pucterest logo" width="50" height="50" />
    </a>
    <div class="mobile-buttons">
      <a href="#" class="avatar {$theme == 'dark' ? 'dark-switch' : ''}">
        <div class="img">
          <img
            src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80"
            alt=""
          />
        </div>
      </a>
      <!-- obtenido de https://dev.to/tqbit/create-your-own-dark-mode-toggle-component-with-vue-js-1284 -->
      <div>
        <button
          on:click={toggleTheme}
          class="switch items {$theme == 'dark' ? 'dark-switch' : ''}"
        >
          🌙
        </button>
      </div>
    </div>
  </div>
  <div class="search {$theme == 'dark' ? 'dark-background' : ''}">
    <div class="search-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </div>
    <input id="search-bar" placeholder="Write and press Enter to search" type="text" bind:value={search} on:keydown={handleSearch}/>
  </div>
  <div class="right">
    <a href="#" class="avatar {$theme == 'dark' ? 'dark-switch' : ''}">
      <div class="img">
        <img
          src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1488&q=80"
          alt=""
        />
      </div>
    </a>
    <!-- obtenido de https://dev.to/tqbit/create-your-own-dark-mode-toggle-component-with-vue-js-1284 -->
    <div>
      <button
        on:click={toggleTheme}
        class="switch items {$theme == 'dark' ? 'dark-switch' : ''}"
      >
        🌙
      </button>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

  /* obtenido de https://dev.to/tqbit/create-your-own-dark-mode-toggle-component-with-vue-js-1284 */
  .switch {
    background: transparent;
    border: none;
  }

  .search-icon {
    height: 20px;
    width: 20px;
    margin-left: 15px;
  }

  .mobile-buttons {
    display: none;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
  }

  @media(max-width:660px) {
    .pinterest {
      flex-direction: column;
    }
    .left,.search {
      margin-bottom: 10px;
    }
    .left {
      justify-content: space-between;
      width: 80%;
    }
    .right {
      visibility: hidden;
      height: 0;
    }
    .mobile-buttons {
      display: flex;
    }
  }

  button.dark-switch:hover {
    background-color: #767676;
  }
  a.dark-switch:hover {
    background-color: #767676;
  }
  a.hidden {
    visibility: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
  }

  * a {
    text-decoration: none;
    color: #151515;
  }
  a:hover {
    background-color: lightgray;
  }

  .pinterest {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 0.938rem;
  }

  div.dark-background {
    background-color: black;
  }

  div.search.dark-background {
    background-color: #767676;
  }

  div.search.dark-background input {
    color: white;
  }

  div.search.dark-background input::placeholder {
    color: lightgray;
  }

  

  .left .logo {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left .logo:hover {
    background-color: #e5e5e5;
  }

  .left .logo img {
    color: #e60022;
    font-size: 24px;
    height: inherit;
    width: inherit;
  }

  .left .home {
    font-weight: bold;
    height: 3rem;
    color: #fff;
    padding: 1rem;
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.563rem;
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

  .search {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    border-radius: 25px;
    overflow: hidden;
    background: #e3e3e3;
  }

  .search:hover {
    background: #c9c9c9;
  }

  .search i {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #767676;
  }

  .search input {
    width: 100%;
    border: none;
    background: none;
    outline: none;
    padding-left: 1rem;
  }

  .search input::placeholder {
    color: #767676;
    font-size: 1rem;
  }

  .right {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .items {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .items:hover {
    background: #e5e5e5;
  }

  .items i {
    font-size: 1rem;
    color: #767676;
  }

  .items-down {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;
  }

  .items-down:hover {
    background: #e5e5e5;
  }
</style>

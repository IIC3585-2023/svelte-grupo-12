<script setup>
  import { loadMore } from "../store/images.js";
  let url = "https://api.unsplash.com/photos/random?count=30";
</script>

<button
  class="scroll"
  on:click={()=>loadMore(url)}>+</button
>

<style>
  .scroll {
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    color: #fff;
    font-size: 18px;
    left: 50%;
    position: absolute;
  }
</style>

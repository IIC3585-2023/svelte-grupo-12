<script>
    export let url = "#";
    export let description = "";
    export let size = "small";
</script>

<div class="card card_{size}">
   <img src="{url}" alt="{description}"/>
</div>

<style>
  .card {
    padding: 0;
    margin: 15px 10px;
    border-radius: 16px;
    background-color: grey;
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

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  .card:hover {
    opacity: 0.8;
  }
</style>

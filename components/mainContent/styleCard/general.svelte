<script>
  export let postOutput = "";
  export let isLoading = true
</script>

<div class:hidden={isLoading} class="card">
      {@html postOutput}
</div>

<style>
  .card {
    transition: opacity 1s;
    backdrop-filter: contrast(1.5);
    font-size: medium;
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    object-fit: cover;
    padding: 20px;
    height: 100%;
    width: 100%;
    max-width: 1000px;
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s ease-in-out;
  }

</style>

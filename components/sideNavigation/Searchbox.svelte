<script>
  import { onMount } from "svelte";
  import jQuery from "jquery";
  let url = window.location.href.split("#")[0];
  onMount(() => {
    window.jQuery = jQuery;
  });
  let isLoading = true;
</script>

<head>
  <script
    src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.2/dist/semantic.min.js"
  ></script>
</head>

<div class="ui search fluid">
  <div
    class="ui input icon fluid"
    class:loading={isLoading}
    class:disabled={isLoading === true}
  >
    <input class="prompt" type="text" placeholder="placeholder" />
    <i class="search icon" />
  </div>
  <div class="results" />
</div>

<style>
  .prompt {
    border-radius: 5px !important;
  }
  .results {
    position: fixed !important;
    top: 170px !important;
    left: 10px !important;
    width: auto;
    min-width: 350px;
    max-width: 500px;
    box-shadow: rgb(0 0 0 / 40%) 10px 10px 30px !important;
    overflow: hidden !important;
    z-index: 100 !important;
    border-radius: 5px !important;
    border: 2px solid rgb(95, 96, 255) !important;
  }
</style>

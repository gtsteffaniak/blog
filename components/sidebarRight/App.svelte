<script>
  export let isMobile = false;
  import { SyncLoader } from "svelte-loading-spinners";
  import Card from "../shared/Card.svelte";
  export let theme = {};
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.2/dist/semantic.min.js"
  ></script>
</svelte:head>

<Card bind:hidden={isMobile} bind:lightmode={theme.lightmode}>
  <div class="card-header">Contents</div>
  <div class="ui divider" />
  <div class="schemas_listing">
</Card>

<style>
  .divider {
    width: 90%;
    margin-top: 0;
  }
  .card-header {
    margin: 1em;
    text-align: center;
    width: 100%;
    font-size: 1em;
    font-weight: 600;
  }
</style>

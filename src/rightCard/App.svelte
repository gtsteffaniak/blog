<script>
  export let isMobile = false;
  //import { SyncLoader } from "svelte-loading-spinners";
  import Gcard from "../shared/Gcard.svelte";
  export let theme = {};
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.2/dist/semantic.min.js"
  ></script>
</svelte:head>

<Gcard
  --card-margin-left=".5em"
  --card-width="35em"
  bind:hidden={isMobile}
  bind:lightmode={theme.lightmode}
  header="Contents"
></Gcard>

<style>
</style>

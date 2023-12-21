<script>
  import { SyncLoader } from "svelte-loading-spinners";
  export let postOutput = "";
  export let isLoading = true;
  export let theme = { lightmode: false };
</script>

<section class:hidden={!isLoading} class="preloader">
  <SyncLoader size="6" color="#7d0e9e" unit="em" />
</section>
<general class:hidden={isLoading} class:lightmode={theme.lightmode}>
  {@html postOutput}
</general>


<style>
  general {
    margin: 0;
    border-radius: 1em;
    transition: opacity 1s;
    font-size: medium;
    overflow: auto;
    padding: 1em;
    height: 100%;
    width: 100%;
    max-width: 1000px;
    box-sizing: border-box;
    background-color: #221d23;
  }
  .lightmode {
    background-color: #dcddde;
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 0s 0.5s,
      opacity 0.5s ease-in-out;
  }
  :global(a) {
    color: #7d0e9e;
  }
  :global(.darkBackground > a,
  .darkBackground > * > a) {
    color: rgb(176, 90, 207);
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 0s 0.5s,
      opacity 0.5s ease-in-out;
  }
  .preloader {
    position: fixed;
    top: 50%;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
</style>

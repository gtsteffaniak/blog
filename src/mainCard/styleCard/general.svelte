<script>
  export let postOutput = "";
  export let isLoading = true;
  export let theme = { lightmode: false };
  import { Render } from "svelte-purify";
</script>

<general class:hidden={isLoading} class:lightmode={theme.lightmode}>
  <Render html={postOutput} />
</general>

<style>
  general {
    margin: 0;
    border-radius: 1em;
    transition: opacity 1s;
    backdrop-filter: contrast(1.5);
    font-size: medium;
    padding: 10px;
    overflow: auto;
    object-fit: cover;
    padding: 20px;
    height: 100%;
    width: 100%;
    width: -moz-available; /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
    width: fill-available;
    height: -moz-available; /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
    height: fill-available;
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
</style>

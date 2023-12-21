<script>
  export let postOutput = "";
  export let isLoading = true;
  export let theme = { lightmode: false };
</script>

<general class:hidden={isLoading} class="general-scrollcard" class:lightmode={theme.lightmode}>
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
  a {
    color: #7d0e9e;
  }
  a {
    color: #7d0e9e;
  }
  .darkBackground > a,
  .darkBackground > * > a {
    color: rgb(176, 90, 207);
  }
</style>

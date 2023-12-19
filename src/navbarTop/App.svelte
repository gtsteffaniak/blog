<script>
  import Logo from "./Logo.svelte";
  export let theme = {};
  export let sidebar = false;
  // List of navigation items
  const navItems = [
    { content: "logo", type: "label", color: "#7d0e9e" },
    { content: "name", type: "label", color: "#7d0e9e" },
    { content: "Item 2", type: "button", color: "#7d0e9e" },
  ];
</script>

<nav class:lightmode={theme.lightmode}>
  <div class="inner">
    {#each navItems as item}
      <button class="ui button" style="background-color:{item.color}">
        {#if item.content == "logo"}
          <Logo bind:open={sidebar} bind:active={sidebar} />
        {:else if item.content == "name"}
          <a href="/"><div style="width:100px;color:white">gPortal</div></a>
        {:else}
          <a href="?about"><i class="mi mi-user" /></a>
        {/if}
      </button>
    {/each}
  </div>
</nav>

<style>
  nav {
    width: 100%;
    height: 3.75em;
    background: transparent;
    background-color: rgba(59, 59, 59, 1);
    border-top: .25em solid #7d0e9e;
    border-bottom: 0;
    -webkit-box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
    padding: 0;
    z-index: 1;
  }
  @supports (backdrop-filter: none) {
    nav {
      background-color: rgba(59, 59, 59, 0.5);
      backdrop-filter: blur(10px) brightness(50%);
    }
  }
  .lightmode {
    background-image: none;
    background-color: lightgray;
  }
  .inner {
    justify-content: space-between;
  }
  .mi {
    font-size: 1.6rem;
  }
  .button {
    min-width: 50px;
    padding: 3px;
    margin: 3px;
    height: 42px;
    font-family: "Nunito", sans-serif;
  }
  .inner {
    margin: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
  }

</style>

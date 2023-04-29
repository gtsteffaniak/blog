<script>
  import Logo from "./Logo.svelte";
  export let theme = "light";
  export let sidebar = false;
  // List of navigation items
  const navItems = [
    { content: "logo", type: "label", color: "#7d0e9e" },
    { content: "name", type: "label", color: "#7d0e9e" },
    { content: "Item 2", type: "button", color: "#7d0e9e" },
  ];
</script>

<nav class:light-mode={theme == "light"}>
  <div class="inner">
    {#each navItems as item}
      <button class="ui button" style="background-color:{item.color}">
        {#if item.content == "logo"}
          <Logo bind:open={sidebar} bind:active={sidebar} />
        {:else if item.content == "name"}
          <a href="/"><div style="width:100px;color:white">gPortal</div></a>
        {:else}
          <a href="/login"><i class="mi mi-user" /></a>
        {/if}
      </button>
    {/each}
  </div>
</nav>

<style>
  nav {
    position: fixed;
    width: 100%;
    background: transparent;
    background-color: rgba(59, 59, 59, 1);
    border-top: 5px solid #7d0e9e;
    border-bottom: 0;
    -webkit-box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
    padding: 0;
    overflow: hidden;
    height: 57px;
  }
  @supports (backdrop-filter: none) {
    nav {
      background-color: rgba(59, 59, 59, 0.5);
      backdrop-filter: blur(10px) brightness(50%);
    }
  }
  .light-mode {
    background: transparent;
    background-color: rgb(193, 193, 193);
  }
  @supports (backdrop-filter: none) {
    .light-mode {
      background-color: rgba(59, 59, 59, 0.5);
      backdrop-filter: blur(10px) brightness(200%);
    }
  }

  .inner {
    justify-content: space-between;
  }
  .mi {
    font-size: 1.6rem;
    color: whitesmoke;
  }
  .button {
    min-width: 50px;
    padding: 3px;
    margin: 3px;
    height: 42px;
    color: white;
    font-family: "Nunito", sans-serif;
  }
  .inner {
    margin: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .ui.button:hover {
    color: white;
  }
  .ui.button:focus {
    color: white;
  }
</style>

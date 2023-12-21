<script>
  let theme = {};
  let blog_schema;
  theme.lightmode = false;
  theme.color = "#7d0e9e";
  let isLoading = true;
  let currentPost = {};
  let showLogin = false;
  let isMobile = window.innerWidth < 850;
  import { getCookie } from "./shared/cookie.js";
  window.addEventListener("resize", reportWindowSize);
  theme.lightmode = false;
  if (getCookie("lightmode") == "true") {
    theme.lightmode = true;
  } else {
    theme.lightmode = false;
  }
  function reportWindowSize() {
    isMobile = window.innerWidth < 850;
  }
  let open = false;
  import Navbar from "./navbarTop/App.svelte";
  import Sidebar from "./slideOutControls/App.svelte";
  import SidebarLeft from "./leftCard/App.svelte";
  import SidebarRight from "./rightCard/App.svelte";
  import MainView from "./mainCard/App.svelte";
</script>

<wrapper class:lightmode={theme.lightmode}>
  <Sidebar bind:open bind:theme />
  <Navbar bind:sidebar={open} bind:showLogin bind:theme />
  <main class:lightmode={theme.lightmode}>
    <SidebarLeft
      bind:isLoading
      bind:blog_schema
      bind:currentPost
      bind:isMobile
      bind:theme
    />
    <MainView
      bind:isLoading
      bind:blog_schema
      bind:currentPost
      bind:isMobile
      bind:theme
    />
    {#if false}
      <SidebarRight
        bind:isLoading
        bind:blog_schema
        bind:currentPost
        bind:isMobile
        bind:theme
      />
    {/if}
  </main>
</wrapper>

<style>
  wrapper {
    overflow: hidden;
    background-color: gray;
    background-image: radial-gradient(
      farthest-corner at -10px -10px,
      #7d0e9e 0%,
      black 80%
    );
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
    animation-direction: alternate;
    display: flex;
    height: 100vh;
    margin: 0;
    flex: 0 1 auto;
    flex-direction: column;
  }

  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }

  .lightmode {
    background-image: radial-gradient(
      at -10px -10px,
      rgb(255 255 255) 0%,
      rgb(159 159 159) 90%
    );
  }
  main {
    padding: 0.5em;
    display: flex;
    height: 100%;
    overflow: hidden;
  }
</style>

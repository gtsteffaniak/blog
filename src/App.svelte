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
  <SidebarRight
    bind:isLoading
    bind:blog_schema
    bind:currentPost
    bind:isMobile
    bind:theme
  />
</main>

<style>
  main {
    padding: 0.5em;
    display: flex;
    height: 100%;
  }
  .lightmode {
    background-color: white
  }
  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }
</style>

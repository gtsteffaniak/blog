<script>
  let theme = {};
  let blog_schema;
  theme.lightmode = false;
  theme.color = "#7d0e9e";
  let isLoading = true;
  let currentPost = {};
  let showLogin = false;
  let isMobile = window.innerWidth < 850;
  import { getCookie,setCookie } from "../utils/cookie.js";
  window.addEventListener("resize", reportWindowSize);
  theme.lightmode = false;
  if ( getCookie("lightmode") == "true" ) {
    theme.lightmode = true
  } else {
    theme.lightmode = false
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
  :global(body) {
    overflow:hidden;
    background-color: gray;
    background-image: radial-gradient(
      farthest-corner at -10px -10px,
      #7d0e9e 0%,
      black 80%
    );
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
    animation-direction: alternate;
  }
  main {
    overflow-y: hidden; /* Hide vertical scrollbar */
    overflow-x: hidden; /* Hide horizontal scrollbar */
    padding-top: 5em;
    padding-left: 1em;
    padding-bottom: 1em;
    padding-right: 1em;
    width: 100%;
    display: flex;
    height: 100vh;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
  }
  .lightmode {
    background-image: radial-gradient(
      farthest-corner at -10px -10px,
      #fff 0%,
      darkgray 90%
    );
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

<script>
  let theme = {};
  let blog_schema;
  theme.lightmode = false
  theme.color = '#ff3e00'
  let isLoading = true;
  let currentPost = {};
  let showLogin = false;
  let isMobile = window.innerWidth < 850;
  window.addEventListener("resize", reportWindowSize);
  const storedMode = localStorage.getItem("lightmode") 
  if (storedMode != null){
    theme.lightmode = storedMode
  }
  function reportWindowSize() {
    isMobile = window.innerWidth < 850;
  }
  let open = false;
  import Navbar from "./topNavbar/Navbar.svelte";
  import Sidebar from "./slideOutControls/Sidebar.svelte";
  import SideNav from "./mainContent/SideNav.svelte";
  import MainView from "./mainContent/MainView.svelte";

</script>

<Sidebar bind:open bind:theme />
<Navbar bind:sidebar={open} bind:showLogin bind:theme />
<main class:lightmode={theme.lightmode} >
  <SideNav
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
</main>

<style>
  :global(body) {
    background-color: '#ff3e00';
    background-image: radial-gradient(
      farthest-corner at -10px -10px,
      '#ff3e00' 0%,
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

  @media (max-device-width: 768px) {
    main {
      flex-direction: column;
    }
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

<script>
  let theme = "dark";
  let showLogin = false;
  let isMobile = window.innerWidth < 750;
  let storedTheme = localStorage.getItem("theme");
  if (storedTheme == "light") {
    theme = "light";
    window.document.body.classList.toggle("light-mode");
  }
  let path = window.location.pathname;
  let open = false;
  import Navbar from "./topNavbar/Navbar.svelte";
  import Sidebar from "./slideOutControls/Sidebar.svelte";
  import SideNav from "./sideNavigation/SideNav.svelte";
  import MainView from "./mainContent/MainView.svelte";
</script>

<Sidebar bind:open bind:theme />
<Navbar bind:sidebar={open} bind:showLogin bind:theme />
<main class:light-mode={theme === "light"}>
  <SideNav bind:isMobile bind:theme />
  <MainView bind:isMobile bind:theme />
</main>

<style>
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
    background-image: radial-gradient(
      farthest-corner at -10px -10px,
      #7d0e9e 0%,
      black 80%
    );
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
    animation-direction: alternate;
  }

  @media (max-device-width: 768px) {
    main {
      flex-direction: column;
    }
  }
  .light-mode {
    background-image: radial-gradient(
      farthest-corner at -10px -10px,
      #7d0e9e 0%,
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

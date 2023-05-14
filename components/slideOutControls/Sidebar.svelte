<script>
  export let open = false;
  export let theme = {};
  theme.lightmode = localStorage.getItem("lightmode");
  export let active = false;
  function toggleTheme() {
    if (theme.lightmode) {
      theme.lightmode = false;
    } else {
      theme.lightmode = true;
    }
    window.document.body.classList.toggle("light-mode");
    localStorage.setItem("lightmode", theme.lightmode);
  }
</script>

<aside
  class="sidenav absolute w-full h-full bg-gray-200 border-r-2 shadow-lg"
  class:open
  class:light-mode={theme.lightmode}
>
  <div class="sidelinks">
    <a style="text-align:center" href="/about">About</a>
  </div>
  <button
    class="ui button"
    on:click={() => (open = !open)}
    on:click={() => (active = !active)}
    on:click={toggleTheme}
  >
    Toggle Theme
  </button>
</aside>

<style>
  aside {
    width: 350px;
    left: -110%;
    transition: left 0.5s ease-in-out;
    top: 0;
    background: transparent;
    background-color: rgb(111, 107, 107);
    -webkit-box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
    height: 100%; /* Full-height: remove this if you want "auto" height */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    background-color: #111; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
  }
  @supports (backdrop-filter: none) {
    aside {
      background-color: rgba(186, 186, 186, 0.5);
      backdrop-filter: blur(10px) brightness(50%);
    }
  }
  .light-mode {
    background: transparent;
    background-color: rgb(111, 111, 111);
  }
  @supports (backdrop-filter: none) {
    .light-mode {
      background-color: rgba(59, 59, 59, 0.3);
      backdrop-filter: blur(10px) brightness(100%);
    }
  }
  .open {
    left: 0;
    top: 0;
  }

  .sidelinks {
    margin: 1em;
    padding-top: 60px;
  }
  button {
    color:white;
    background-color:#7d0e9e;
    display:block;
    margin:auto
  }
  /* The navigation menu links */
  aside a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }

  /* When you mouse over the navigation links, change their color */
  aside a:hover {
    color: #f1f1f1;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    aside {
      padding-top: 15px;
    }
    aside a {
      font-size: 18px;
    }
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    aside {
      padding-top: 15px;
    }
    aside a {
      font-size: 18px;
    }
  }
</style>

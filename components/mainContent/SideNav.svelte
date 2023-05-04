<script>
  import yaml from "js-yaml";
  import { onMount } from "svelte";
  import jQuery from "jquery";
  export let currentlySelected = "";
  let isLoading = true;
  export let title = "Title of blog";
  export let post = "";
  onMount(() => {
    window.jQuery = jQuery;
    setTimeout(function () {
      window.jQuery(".ui.accordion").accordion();
    }, 1000); // after 1s TRY AGAIN
  });
  export let isMobile = false;
  export let blog_schema;
  let promise = fetchSchema();
  async function fetchSchema() {
    var response = await fetch("public/static/schema.yml");
    const data = await response.text();
    const posts = yaml.loadAll(data)[0].posts;
    if (response.ok) {
      let url = window.location.href.split("#")[0];
      if (url.length > 1) {
        post = url.split("/?")[1];
      }
      getLatestPinned(posts);
    }
    isLoading = false;
    blog_schema = posts;
    return posts;
  }
  function updateLocation(path) {
    const nextURL = path;
    const nextTitle = "My new page title";
    const nextState = { additionalInformation: "Updated the URL with JS" };
    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL);
    // This will replace the current entry in the browser's history, without reloading
    window.history.replaceState(nextState, nextTitle, nextURL);
  }
  async function getLatestPinned(posts) {
    for (const [year, months] of Object.entries(posts)) {
      for (const [month, posts] of Object.entries(months)) {
        posts.forEach((e) => {
          if (post == "") {
            if ("pinned" in e) {
              setCurrentlyActive(e);
              return;
            }
          } else {
            if (post == e.ref) {
              setCurrentlyActive(e);
            }
            return;
          }
        });
      }
    }
  }
  async function setCurrentlyActive(p) {
    title = p.title;
    post = p.ref;
    const nextURL = "/?" + p.ref;
    const nextTitle = "My new page title";
    const nextState = { additionalInformation: "Updated the URL with JS" };
    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL);
    // This will replace the current entry in the browser's history, without reloading
    window.history.replaceState(nextState, nextTitle, nextURL);
    currentlySelected = p.ref;
  }
  export let theme = "light";
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.2/dist/semantic.min.js"
  ></script>
</svelte:head>

{#if blog_schema != null}
  <wrapper class:hide={isMobile === true}>
    <div
      id="sideNav"
      class="card"
      class:expandWidth={isMobile === true}
      class:light-mode={theme === "light"}
    >
      <div class="card-header">Posts</div>
      <div class="ui divider" />
      <div class="schemas_listing">
        <div class="ui inverted fluid accordion">
          {#each Object.entries(blog_schema) as [year, months]}
            <div class:blackText={theme === "light"} class="active title">
              <i class="dropdown icon" />
              {year}
            </div>
            <div style="padding-left:1em" class="active content">
              {#each Object.entries(months) as [month, posts]}
                <div class:blackText={theme === "light"} class="active title">
                  <i class="dropdown icon" />
                  {month}
                </div>
                <div style="padding-left:1em" class="active content">
                  {#each posts as post}
                    <div style="padding-left:1em" class="content">
                      <i class="caret right icon" />
                      <!-- svelte-ignore a11y-click-events-have-key-events -->
                      <!-- svelte-ignore a11y-missing-attribute -->
                      <a
                        on:click={() => setCurrentlyActive(post)}
                        class:bolded={currentlySelected == post.ref}
                        >{post.title}</a
                      >
                    </div>
                  {/each}
                </div>
              {/each}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </wrapper>
{/if}

<style>
  wrapper {
    display: flex;
    height: 100%;
    width: fit-content;
    animation: 0.3s ease-in 0s 1 slideIn;
    transition: all 0.5s ease-in-out;
  }
  @keyframes slideIn {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .card {
    justify-content: center;
    margin: 0;
    background: transparent;
    background-color: rgba(59, 59, 59, 1);
    border-top: 5px solid #7d0e9e;
    border-bottom: 5px solid #7d0e9e;
    -webkit-box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
    padding: 10px;
    overflow: hidden;
    border-radius: 15px;
    border: 2px solid #7d0e9e;
    padding: 20px;
    height: 100%;
    color: white;
    width: max-content;
    overflow-y: scroll;
  }
  @supports (backdrop-filter: none) {
    .card {
      background-color: rgba(59, 59, 59, 0.5);
      backdrop-filter: blur(10px) brightness(50%);
    }
  }
  .hide {
    display: none;
    width: 0;
  }
  .light-mode {
    color: black;
    background: transparent;
    background-color: rgb(220, 220, 220);
  }
  @supports (backdrop-filter: none) {
    .light-mode {
      background-color: rgba(250, 250, 250, 0.8);
      backdrop-filter: blur(10px) brightness(100%);
    }
  }
  a {
    cursor: pointer;
  }
  .blackText {
    color: black !important;
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 0px);
    }
    10% {
      transform: translate(-1px, 0px);
    }
    20% {
      transform: translate(-3px, 0px);
    }
    30% {
      transform: translate(3px, 0px);
    }
    40% {
      transform: translate(1px, 0px);
    }
    50% {
      transform: translate(-1px, 0px);
    }
    60% {
      transform: translate(-3px, 0px);
    }
    70% {
      transform: translate(3px, 0px);
    }
    80% {
      transform: translate(-1px, 0px);
    }
    90% {
      transform: translate(1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
    }
  }
  .bolded {
    font-weight: bolder !important;
  }
  .card-header {
    vertical-align: middle;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    width: 100%;
    font-size: 1em;
    font-weight: 600;
  }
</style>

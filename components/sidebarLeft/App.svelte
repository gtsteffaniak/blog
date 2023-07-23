<script>
  import yaml from "js-yaml";
  import { onMount } from "svelte";
  export let isLoading = true;
  export let currentPost = {};
  currentPost.ref = "";
  onMount(() => {
    fetchSchema();
  });
  export let isMobile = false;
  import { SyncLoader } from "svelte-loading-spinners";
  import Card from "../shared/Card.svelte";
  export let blog_schema;
  async function fetchSchema() {
    var response = await fetch("public/static/schema.yml");
    const data = await response.text();
    const posts = yaml.loadAll(data)[0].posts;
    if (response.ok) {
      getCurrentPost(posts);
    }
    isLoading = false;
    blog_schema = posts;
    return;
  }
  function getCurrentPost(posts) {
    let url = window.location.href.split("#")[0];
    let path = "";
    let notFound = true;
    let pinned = {};
    if (url.length > 1) {
      path = url.split("/?")[1];
      for (const [year, months] of Object.entries(posts)) {
        for (const [month, posts] of Object.entries(months)) {
          posts.forEach((e) => {
            if (notFound) {
              if (e.ref == path) {
                setCurrentlyActive(e);
                notFound = false;
              }
              if ("pinned" in e && pinned != null) {
                pinned = e;
              }
            }
          });
        }
      }
    }
    if (notFound) {
      setCurrentlyActive(pinned);
    }
  }
  async function setCurrentlyActive(p) {
    currentPost = p;
    const nextURL = "?" + p.ref;
    const nextTitle = "My new page title";
    const nextState = { additionalInformation: "Updated the URL with JS" };
    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL);
    // This will replace the current entry in the browser's history, without reloading
    window.history.replaceState(nextState, nextTitle, nextURL);
  }
  export let theme = {};
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.2/dist/semantic.min.js"
  ></script>
</svelte:head>

<Card bind:hidden={isMobile} bind:lightmode={theme.lightmode}>
    <div class="card-header">Posts</div>
    <div class="ui divider" />
    <div class="schemas_listing">
      {#if blog_schema == null}
        <section class="preloader">
          <SyncLoader size="3" color="#7d0e9e" unit="em" />
        </section>
      {:else}
        {#each Object.entries(blog_schema) as [year, months]}
          <div
            class:inverted={theme.lightmode}
            class:darkBackground={!theme.lightmode}
            class="list_item ui grey label"
            style="margin-left:.5em;font-weight:bold"
          >
            {year}
          </div>
          {#each Object.entries(months) as [month, posts]}
            <div
              class:blackText={theme.lightmode}
              class:inverted={theme.lightmode}
              class:darkBackground={!theme.lightmode}
              style="font-weight:bold"
              class="list_item ui grey label"
            >
              {month}
              {#each posts as post}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <a
                  on:click={() => setCurrentlyActive(post)}
                  class:bolded={currentPost.ref == post.ref}
                  class="list_item ui"
                >
                  {post.title}
                </a>
              {/each}
            </div>
          {/each}
        {/each}
      {/if}
    </div>
</Card>

<style>
  @keyframes slideIn {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .schemas_listing {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .darkBackground {
    background-color: #221d23 !important;
  }
  .list_item {
    margin: 0.5em !important;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-weight: normal;
    font-size: large;
  }

  .preloader {
    position: fixed;
    top: 10%;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  a {
    cursor: pointer;
  }
  .blackText {
    color: black !important;
  }
  .bolded {
    text-decoration: underline;
    text-underline-offset: 5px;
    opacity: 1 !important;
  }
  .divider {
    width: 90%;
    margin-top: 0;
  }
  .card-header {
    margin: 1em;
    text-align: center;
    width: 100%;
    font-size: 1em;
    font-weight: 600;
  }
</style>

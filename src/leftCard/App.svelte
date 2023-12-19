<script>
  import { setCurrentlyActive, getCurrentPost } from "../selector.js";
  import yaml from "js-yaml";
  export let isLoading = true;
  export let currentPost = {};
  currentPost.ref = "";
  fetchSchema();
  export let isMobile = false;
  import { SyncLoader } from "svelte-loading-spinners";
  import Gcard from "../shared/Gcard.svelte";
  export let blog_schema;
  async function fetchSchema() {
    var response = await fetch("static/schema.yml");
    const data = await response.text();
    const posts = yaml.loadAll(data)[0].posts;
    if (response.ok) {
      currentPost = getCurrentPost(posts);
      console.log(currentPost);
    }
    isLoading = false;
    blog_schema = posts;
    return;
  }

  export let theme = {};
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.9.2/dist/semantic.min.js"
  ></script>
</svelte:head>

<Gcard
  bind:hidden={isMobile}
  --card-width="35em"
  --theme-color="transparent"
  bordered="true"
  bind:lightmode={theme.lightmode}
  header="Posts"
>
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
          class="list_item"
          style="font-weight:bold"
        >
          {year}
          <hr />

          {#each Object.entries(months) as [month, posts]}
            <div
              class:blackText={theme.lightmode}
              class:inverted={theme.lightmode}
              class:darkBackground={!theme.lightmode}
              style="font-weight:bold"
              class="list_item"
            >
              {month}
              <br />
              {#each posts as post}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <a
                  on:click={() => (currentPost = setCurrentlyActive(post))}
                  class:bolded={currentPost.ref == post.ref}
                  class:lightText={theme.lightmode}
                  class="post_link"
                >
                  {post.title}
                </a>
              {/each}
            </div>
          {/each}
        </div>
      {/each}
    {/if}
  </div>
</Gcard>

<style>
  hr {
    width: 100%;
    border-style: ridge;
  }

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
    vertical-align: baseline;
    margin: 0;
    background-color: #e8e8e8;
    background-image: none;
    padding: 0.5em;
    font-weight: 700;
    border-radius: 0.5em;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-weight: normal;
    font-size: large;
    background-color: #dcddde;
  }
  .post_link {
    padding-top: 0.5em;
  }
  .post_link:hover {
    color: white;
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

  .blackText {
    color: black !important;
  }
  .lightText {
    color: #797878;
  }
  a:hover {
    color: white !important;
  }
  .bolded {
    text-decoration: underline;
    text-underline-offset: 5px;
    opacity: 1 !important;
  }
</style>

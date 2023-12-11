<script>
  import { setCurrentlyActive, getCurrentPost } from '../selector.js';
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
      currentPost = getCurrentPost(posts)
      console.log(currentPost)
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

<Gcard bind:hidden={isMobile} --card-width="35em" bind:lightmode={theme.lightmode} header="Posts">
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
            style="font-weight:bold"
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
              <br>
              {#each posts as post}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <a
                  on:click={() => currentPost = setCurrentlyActive(post)}
                  class:bolded={currentPost.ref == post.ref}
                  class="ui"
                  style="padding-top:.5em"
                >
                  {post.title}
                </a>
              {/each}
            </div>
          {/each}
        {/each}
      {/if}
    </div>
</Gcard>

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
    margin:0px;
    margin-bottom: 1em;
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

</style>

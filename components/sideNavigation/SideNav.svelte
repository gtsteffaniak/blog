<script>
  import yaml from "js-yaml";
  import { onMount } from "svelte";
  import jQuery from 'jquery';
  onMount(() => {
    window.jQuery = jQuery;
  })
  let url = window.location.href.split("#")[0];
  export let isMobile = false
  let blog_schema = fetchSchema();
  async function fetchSchema() {
    var response = await fetch("static/schema.yml");
    const data = await response.text();
    const posts = yaml.loadAll(data)[0].posts;
    console.log(posts);
    return posts;
  }

  import Searchbox from "./Searchbox.svelte";
  export let theme = "light";
</script>

<wrapper>

  {#if isMobile}
  <div class="card" class:light-mode={theme === "light"}>
    <div class="card-header">Posts</div>
    <div class="ui divider" />
    <div class="schemas_listing">
      {#await blog_schema}
        <p>...Loading</p>
      {:then blog_schema}
      <div class="ui fluid search selection dropdown">
        <input type="hidden" name="post">
        <i class="dropdown icon"></i>
        <div class="default text">Select Post</div>
        <div class="menu">
          {#each Object.entries(blog_schema) as [year,months]}
              {#each Object.entries(months) as [month,posts] }
                  {#each posts as post }
                    <div class="item" data-value={post.ref}><i class="tg flag"></i>{post.title}</div>
                  {/each}
              {/each}
          {/each}
        </div>
      </div>
      {:catch error}
        error
      {/await}
    </div>
  </div>
  {:else}
  <div class="card" class:light-mode={theme === "light"}>
    <div class="card-header">Posts</div>
    <div class="ui divider" />
    <div class="schemas_listing">
      <Searchbox />
      <h4>Choose from below:</h4>
      {#await blog_schema}
        <p>...Loading</p>
      {:then blog_schema}
        <div class="ui inverted fluid accordion">
          {#each Object.entries(blog_schema) as [year,months]}
            <div class="active title">
              <i class="dropdown icon"></i>
              {year}
            </div>
            <div style="padding-left:1em" class="active content">
              {#each Object.entries(months) as [month,posts] }
                <div class="active title">
                  <i class="dropdown icon"></i>
                  {month}
                </div>
                <div style="padding-left:1em"  class="active content">
                  {#each posts as post }
                    <div style="padding-left:1em"  class="active content">
                      <i class="dropdown icon"></i>
                      <a href={'#' + post.ref} >{post.title}</a>
                    </div>
                  {/each}
                </div>

              {/each}
            </div>
          {/each}
        </div>
      {:catch error}
        error
      {/await}
    </div>
  </div>
  {/if}
</wrapper>

<style>
  wrapper {
    height: 100%;
    width: 30em;
  }
  @media (max-device-width: 768px) {
      wrapper {
        height: 10em;
        width: 100%;
        margin-bottom: 1em;
    }
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
    animation: 0.3s ease-in 0s 1 slideIn;
    transition: all 0.5s ease-in-out;
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
    z-index: 100;
    border-radius: 15px;
    border: 2px solid #7d0e9e;
    padding: 20px;
    height: 100%;
    color: white;
  }
  @supports (backdrop-filter: none) {
    .card {
      background-color: rgba(59, 59, 59, 0.5);
      backdrop-filter: blur(10px) brightness(50%);
    }
  }

  .light-mode {
    background: transparent;
    background-color: rgb(193, 193, 193);
  }
  @supports (backdrop-filter: none) {
    .light-mode {
      background-color: rgba(59, 59, 59, 0.5);
      backdrop-filter: blur(10px) brightness(200%);
    }
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

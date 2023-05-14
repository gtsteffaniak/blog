<script>
  import { onMount } from "svelte";
  import jQuery from "jquery";
  export let blog_schema;
  export let currentPost = {};
  onMount(() => {
    window.jQuery = jQuery;
    setTimeout(function () {
      let selector = window.jQuery(".ui.selection.dropdown");
      selector.dropdown({
        clearable: true,
      });
      selector.on("click", function () {
        let ref = selector.dropdown("get value");
        if (ref != null) {
          getPost(ref);
        }
      });
    }, 500); // after 1s TRY AGAIN
  });

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
  async function getPost(ref) {
    let posts = blog_schema
    for (const [year, months] of Object.entries(posts)) {
      for (const [month, posts] of Object.entries(months)) {
        posts.forEach((e) => {
          if (e.ref == ref) {
            setCurrentlyActive(e);
            return;
          }
        });
      }
    }
  }
</script>

{#if blog_schema == null}
  <p>...Loading</p>
{:else}
  <div class="ui search selection dropdown">
    <input type="hidden" name="post" value={currentPost.ref} />
    <i class="dropdown icon" />
    <div class="default text">Select Post</div>
    <div class="menu">
      {#each Object.entries(blog_schema) as [year, months]}
        {#each Object.entries(months) as [month, posts]}
          {#each posts as p}
            {#if p.ref == currentPost.ref}
              <div class="item active selected" data-value={p.ref}>
                <i class="tg flag" />{p.title}
              </div>
            {:else}
              <div class="item" data-value={p.ref}>
                <i class="tg flag" />{p.title}
              </div>
            {/if}
          {/each}
        {/each}
      {/each}
    </div>
  </div>
{/if}

<style>
  .dropdown {
    width: 90%;
    margin: 1em;
  }
</style>

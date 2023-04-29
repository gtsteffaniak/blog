<script>
  import { onMount } from "svelte";
  import jQuery from "jquery";
  export let blog_schema;
  export let isLoading = true;
  export let currentlySelected = "";
  export let hash = "";
  onMount(() => {
    window.jQuery = jQuery;
    setTimeout(function () {
      let selector = window.jQuery(".ui.selection.dropdown")
      selector.dropdown({
        clearable: true,
      });
      selector.on('click', function() {
        window.location.hash = selector.dropdown('get value');
      })
    }, 500); // after 1s TRY AGAIN
  });
</script>

{#if blog_schema == null}
  <p>...Loading</p>
{:else}
  <div class="ui fluid search selection dropdown">
    <input type="hidden" name="post" value={currentlySelected} />
    <i class="dropdown icon" />
    <div class="default text">Select Post</div>
    <div class="menu">
      {#each Object.entries(blog_schema) as [year, months]}
        {#each Object.entries(months) as [month, posts]}
          {#each posts as post}
            {#if post.ref == hash}
              <div class="item active selected" data-value={post.ref}>
                <i class="tg flag" />{post.title}
              </div>
            {:else}
              <div class="item" data-value={post.ref}>
                <i class="tg flag" />{post.title}
              </div>
            {/if}
          {/each}
        {/each}
      {/each}
    </div>
  </div>
{/if}

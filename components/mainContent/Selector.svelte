<script>
  import { onMount } from "svelte";
  import jQuery from "jquery";
  export let blog_schema;
  export let currentlySelected = "";
  export let post = "";
  onMount(() => {
    window.jQuery = jQuery;
    setTimeout(function () {
      let selector = window.jQuery(".ui.selection.dropdown");
      selector.dropdown({
        clearable: true,
      });
      selector.on("click", function () {
        window.location.path = "?path=" + selector.dropdown("get value");
      });
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
          {#each posts as p}
            {#if p.ref == post}
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

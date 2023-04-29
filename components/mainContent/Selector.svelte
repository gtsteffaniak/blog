<script>
import { onMount } from "svelte";
import jQuery from "jquery";
export let blog_schema
let isLoading = true;
export let hash = "";
onMount(() => {
    window.jQuery = jQuery;
    setTimeout(function() {
      window.jQuery('.ui.selection.dropdown').dropdown({
        clearable: true
      })
    }, 1000) // after 1s TRY AGAIN
  })
</script>

{#if blog_schema == null}
  <p>...Loading</p>
{:else}
<div class="ui fluid search selection dropdown">
  <input type="hidden" name="post">
  <i class="dropdown icon"></i>
  <div class="default text">{hash}</div>
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
{/if}
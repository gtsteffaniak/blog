<script>
  // Imports and variable declarations
  import { getPost } from "../selector.js";
  import { SyncLoader } from "svelte-loading-spinners";
  import { marked } from "marked";
  import hljs from "highlight.js";
  import { onMount } from "svelte";
  import StarsCard from "./styleCard/space.svelte";
  import Gcard from "../shared/Gcard.svelte";
  import AboutCard from "./styleCard/about.svelte";
  import GeneralCard from "./styleCard/general.svelte";
  import jQuery from "jquery";

  // Exported props
  export let theme = {};
  export let isMobile = false;
  export let blog_schema;
  export let isLoading = true;
  export let currentPost = {};

  // Local variables
  let postOutput = "";
  let styleTheme = "";
  let prevRef = "";
  let header = "Loading Post...";
  let margin = ".5em";

  onMount(() => {
    // Initialize jQuery (if needed)
    window.jQuery = jQuery;

    // Initialize marked options
    marked.setOptions({
      highlight: (code) => hljs.highlightAuto(code).value,
    });

    // Fetch post if URL is provided
    const url = window.location.href.split("#")[0];
    if (url.length > 1) {
      fetchPost(url.split("/?")[1]);
    }
    window.marked = marked;

    // Initialize dropdown behavior (if needed)
    setTimeout(() => {
      const selector = window.jQuery(".ui.selection.dropdown");
      selector.dropdown({
        clearable: true,
      });
      selector.on("click", () => {
        const ref = selector.dropdown("get value");
        if (ref != null) {
          currentPost = getPost(ref, blog_schema);
        }
      });
    }, 500); // after TRY AGAIN
  });

  // Reactive statements
  $: currentPost && fetchPost(currentPost.ref) && updateHeader(isMobile);
  $: theme && updateCSS();

  // Function to fetch post based on reference
  async function fetchPost(ref) {
    if (ref == "" || ref == prevRef || ref == "about") {
      return;
    }
    postOutput = "";
    isLoading = true;
    prevRef = ref;

    const response = await fetch(ref);
    let data = await response.text();
    if (!response.ok) {
      data = "Unable to find post! **so sad**";
    }
    postOutput = marked.parse(data);

    styleTheme = currentPost?.theme !== undefined ? currentPost.theme : "general";
    updateCSS();
    isLoading = false;
    window.scrollTo(0, 0);
  }

  // Function to update CSS styles based on theme
  function updateCSS() {
    setTimeout(() => {
      document.querySelectorAll("img").forEach((img) => {
        img.setAttribute("loading", "lazy");
        img.setAttribute("alt", "dominant color placeholder");
      });
      document.querySelectorAll("pre code").forEach((code) => {
        code.style.padding = "0.5em";
      });
      
      const codeElements = document.querySelectorAll("code");
      codeElements.forEach((code) => {
        code.style.backgroundColor = theme.lightmode ? "lightgray" : "black";
      });

      const tableElements = document.querySelectorAll("table");
      tableElements.forEach((table) => {
        if (theme.lightmode) {
          table.classList.remove("inverted");
        } else {
          table.classList.add("inverted");
        }
        table.classList.add(
          "ui",
          "sortable",
          "selectable",
          "unstackable",
          "celled",
          "table",
        );
      });
    }, 100);
  }

  // Function to handle post change in the dropdown
  function handlePostChange(event) {
    const selectedRef = event.target.value;
    if (selectedRef !== "") {
      currentPost = getPost(selectedRef, blog_schema);
      fetchPost(selectedRef);
    }
  }

  // Function to update header and margin based on mobile view
  function updateHeader(isMobile) {
    if (isMobile) {
      header = "";
      margin = "0px";
    } else {
      header = currentPost.title || "";
      margin = "0.5em";
    }
  }
</script>

<Gcard
  --card-margin-left={margin}
  --theme-color={theme.color}
  bordered="true"
  bind:lightmode={theme.lightmode}
  {header}
>
  <section class:hidden={!isLoading} class="preloader">
    <SyncLoader size="6" color="#7d0e9e" unit="em" />
  </section>
  {#if isMobile}
    {#if blog_schema === null || typeof blog_schema === "undefined"}
      <p>...Loading</p>
    {:else}
      <select id="postDropdown" on:change={handlePostChange}>
        <option value="">Select Post</option>
        {#each Object.entries(blog_schema) as [year, months]}
          {#each Object.entries(months) as [month, posts]}
            {#each posts as p}
              {#if p.ref == currentPost.ref}
              <option value="{p.ref}" selected>
                {year}/{month} - {p.title}
              </option>
              {:else}
              <option value="{p.ref}" >
                {year}/{month} - {p.title}
              </option>
              {/if}
            {/each}
          {/each}
        {/each}
      </select>
    {/if}
  {/if}
  {#if currentPost.ref == "about"}
    <AboutCard bind:theme />
  {:else if styleTheme == "space"}
    <StarsCard bind:isLoading bind:postOutput bind:currentPost />
  {:else}
    <GeneralCard bind:isLoading bind:postOutput bind:currentPost bind:theme />
  {/if}
</Gcard>

<style>
  select {
    width: 100%;
    margin-bottom: 1em;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(10%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 0s 0.5s,
      opacity 0.5s ease-in-out;
  }
  .preloader {
    position: fixed;
    top: 50%;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
</style>

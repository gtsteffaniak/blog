<script>
  export let theme = {};
  export let isMobile = false;
  import { getPost } from "../selector.js";
  import { SyncLoader } from "svelte-loading-spinners";
  export let blog_schema;
  import { marked } from "marked";
  import hljs from "highlight.js";
  import { onMount } from "svelte";
  export let isLoading = true;
  import StarsCard from "./styleCard/space.svelte";
  import Gcard from "../shared/Gcard.svelte";
  import AboutCard from "./styleCard/about.svelte";
  import GeneralCard from "./styleCard/general.svelte";
  import jQuery from "jquery";
  let postOutput = "";
  export let currentPost = {};
  let styleTheme = "";
  let prevRef = "";
  let header="Loading Post..."
  let margin= ".5em"
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
          currentPost = getPost(ref,blog_schema)
        }
      });
    }, 500); // after TRY AGAIN
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
    });
    let url = window.location.href.split("#")[0];
    if (url.length > 1) {
      fetchPost(url.split("/?")[1]);
    }
    window.marked = marked;
  });
  $: currentPost && fetchPost(currentPost.ref) && updateHeader(isMobile); // post change event listener

  $: theme && updateCSS(); // post change event listener
  async function fetchPost(ref) {
    if (ref == "" || ref == prevRef || ref == "about") {
      return;
    }
    postOutput = "";
    isLoading = true;
    prevRef = ref;
    var response = await fetch(ref);
    let data = await response.text();
    if (!response.ok) {
      data = "Unable to find post! **so sad**";
    }
    postOutput = marked.parse(data);
    if (currentPost.theme != null) {
      styleTheme = currentPost.theme;
    }
    updateCSS();
    isLoading = false;
    window.scrollTo(0, 0);
    return false;
  }

  function updateCSS() {
    setTimeout(function () {
      document.querySelectorAll("img").forEach((img) => {
        img.setAttribute("loading", "lazy");
        img.setAttribute("alt", "dominant color placeholder");
      });
      document.querySelectorAll("pre code").forEach((code) => {
        code.style.padding = "0.5em";
      });
      if (theme.lightmode) {
        // Set the background color of all code elements to black
        document.querySelectorAll("code").forEach((code) => {
          code.style.backgroundColor = "lightgray";
        });
      } else {
        // Set the background color of all code elements to black
        document.querySelectorAll("code").forEach((code) => {
          code.style.backgroundColor = "black";
        });
      }
      let table = document.querySelectorAll("table");
      for (var i = 0; i < table.length; ++i) {
        if (theme.lightmode) {
          table[i].classList.remove("inverted");
        } else {
          table[i].classList.add("inverted");
        }
        table[i].classList.add(
          "ui",
          "sortable",
          "selectable",
          "unstackable",
          "celled",
          "table"
        );
      }
    }, 100);
  }
  function updateHeader(isMobile){
    if (isMobile){
      header=""
      margin="0px"
    }else{
      header=currentPost.title
      margin="0.5em"
    }
  }

</script>

<Gcard
  --card-margin-left={margin}
  --theme-color={theme.color}
  bordered="true"
  bind:lightmode={theme.lightmode}
  header={header}
>
  <section class:hidden={!isLoading} class="preloader">
    <SyncLoader size="6" color="#7d0e9e" unit="em" />
  </section>
  {#if isMobile}
    {#if blog_schema === null || typeof blog_schema === "undefined"}
      <p>...Loading</p>
    {:else}
      <div class="ui search selection fluid dropdown">
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
  {/if}
  {#if currentPost.ref == "about"}
    <AboutCard bind:theme />
  {:else if styleTheme == "space"}
    <StarsCard bind:isLoading bind:postOutput bind:currentPost />
  {:else}
    <GeneralCard bind:isLoading bind:postOutput bind:currentPost />
  {/if}
</Gcard>

<style>
  .search {
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
  @supports (backdrop-filter: none) {
    .light-mode {
      background-color: rgba(250, 250, 250, 0.8);
      backdrop-filter: blur(10px) brightness(100%);
    }
  }
  .hidden {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s ease-in-out;
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

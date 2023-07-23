<script>
  export let theme = {};
  export let isMobile = false;
  import Selector from "./Selector.svelte";
  import { SyncLoader } from "svelte-loading-spinners";
  export let blog_schema;
  import { marked } from "marked";
  import hljs from "highlight.js";
  import { onMount } from "svelte";
  export let isLoading = true;
  import StarsCard from "./styleCard/space.svelte";
  import GeneralCard from "./styleCard/general.svelte";
  import jQuery from "jquery";
  let postOutput = "";
  export let currentPost = {};
  currentPost.ref = "";
  let styleTheme = ""
  let prevRef = "";
  onMount(() => {
    window.jQuery = jQuery;
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
    });
    window.marked = marked;
    fetchPost(currentPost.ref);
  });
  $: currentPost && fetchPost(currentPost.ref); // post change event listener
  $: theme && updateCSS(); // post change event listener
  async function fetchPost(ref) {
    if (ref == "" || ref == prevRef) {
      return;
    }
    postOutput = ""
    isLoading = true;
    prevRef = ref;
    var response = await fetch(ref);
    let data = await response.text();
    if (!response.ok) {
      data = "Unable to find post! **so sad**";
    }
    postOutput = marked.parse(data);
    if (currentPost.theme != null) {
      styleTheme = currentPost.theme
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
          "collapsing",
          "celled",
          "table"
        );
      }
    }, 100);
  }
</script>

<wrapper class:mobile={isMobile} class:light-mode={theme.lightmode}>
  <section class:hidden={!isLoading} class="preloader">
    <SyncLoader size="6" color="#7d0e9e" unit="em" />
  </section>
  {#if isMobile}
    <Selector bind:blog_schema bind:currentPost />
  {:else}
    <div class="card-header">{currentPost.title}</div>
    <div class="ui divider" />
  {/if}
  {#if (styleTheme == "space")}
    <StarsCard bind:isLoading bind:postOutput bind:currentPost />
  {:else}
    <GeneralCard bind:isLoading bind:postOutput bind:currentPost />
  {/if}
</wrapper>

<style>
  wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
    border: 2px solid #7d0e9e;
    -webkit-box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
    animation: 0.3s ease-in 0s 1 slideIn;
    transition: all 0.5s ease-in-out;
    justify-content: center;
    margin-right: 0.5em;
    background: transparent;
    background-color: rgba(59, 59, 59, 1);
    margin-bottom: 0;
    color: white;
    align-items: center;
  }
  
  @supports (backdrop-filter: none) {
    wrapper {
      background-color: rgba(59, 59, 59, 0.5);
      backdrop-filter: blur(10px) brightness(50%);
    }
  }
  .mobile {
    margin-left: 0 !important;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(10%);
    }
    100% {
      transform: translateX(0);
    }
  }
  .light-mode {
    color: black;
    background: transparent;
    background-color: rgb(220, 220, 220);
  }
  @supports (backdrop-filter: none) {
    .light-mode {
      background-color: rgba(250, 250, 250, 0.8);
      backdrop-filter: blur(10px) brightness(100%);
    }
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

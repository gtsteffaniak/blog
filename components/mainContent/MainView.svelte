<script>
  export let theme = "light";
  export let isMobile = false;
  import Selector from "./Selector.svelte";
  export let blog_schema;
  export let currentlySelected;
  import { marked } from "marked";
  import hljs from "highlight.js";
  import { onMount } from "svelte";
  import jQuery from "jquery";
  let postOutput = "";
  let currentPost = "";
  export let post = "";
  onMount(() => {
    window.jQuery = jQuery;
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
    });
    window.marked = marked;
    fetchPost(post);
  });
  $: post && fetchPost(post); // post change event listener
  $: theme && updateCSS(); // post change event listener
  export let title = "Title of blog";
  async function fetchPost(post) {
    if (post == "" || post == currentPost) {
      return;
    }
    currentPost = post;
    var response = await fetch(post);
    let data = await response.text();
    if (!response.ok) {
      data = "Unable to find post! **so sad**";
    }
    postOutput = marked.parse(data);
    updateCSS();
    return;
  }

  function updateCSS() {
    setTimeout(function () {
      document.querySelectorAll("h2").forEach((h2) => {
        const link = document.createElement("a");
        link.setAttribute("href", "/?" + post + "#" + h2.id);
        link.appendChild(h2.cloneNode(true));
        h2.parentNode.replaceChild(link, h2);
      });

      document.querySelectorAll("img").forEach((img) => {
        img.setAttribute("loading", "lazy");
        img.setAttribute("alt", "dominant color placeholder");
      });
      document.querySelectorAll("pre code").forEach((code) => {
        code.style.padding = "0.5em";
      });
      if (theme == "light") {
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
        if (theme == "light") {
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
  window.addEventListener(
    "popstate",
    () => {
      let url = window.location.href.split("#")[0];
      if (url.length > 1) {
        post = url.split("/?")[1];
      }
      fetchPost(post);
    },
    false
  );
</script>

<wrapper class:mobile={isMobile === true} class:light-mode={theme === "light"}>
  {#if isMobile}
    <div id="infoCard" class="card">
      <Selector bind:blog_schema bind:currentlySelected bind:post />
      <div class="ui divider" />
      {#if postOutput == ""}
        <div class:inverted={theme != "light"} class="ui fluid placeholder">
          <div class="image header">
            <div class="line" />
            <div class="line" />
          </div>
          <div class="paragraph">
            <div class="line" />
            <div class="line" />
            <div class="line" />
            <div class="line" />
            <div class="line" />
          </div>
          <div class="paragraph">
            <div class="line" />
            <div class="line" />
            <div class="line" />
          </div>
          <div class="paragraph">
            <div class="line" />
            <div class="line" />
            <div class="line" />
            <div class="line" />
            <div class="line" />
          </div>
        </div>
      {:else}
        {@html postOutput}
      {/if}
    </div>
  {:else}
    <div class="card">
      <div class="card-header">{title}</div>
      <div class="ui divider" />
      {#if postOutput == ""}
        <div class:inverted={theme != "light"} class="ui fluid placeholder">
          <div class="image header">
            <div class="line" />
            <div class="line" />
          </div>
          <div class="paragraph">
            <div class="line" />
            <div class="line" />
            <div class="line" />
            <div class="line" />
            <div class="line" />
          </div>
          <div class="paragraph">
            <div class="line" />
            <div class="line" />
            <div class="line" />
          </div>
          <div class="paragraph">
            <div class="line" />
            <div class="line" />
            <div class="line" />
            <div class="line" />
            <div class="line" />
          </div>
        </div>
      {:else}
        {@html postOutput}
      {/if}
    </div>
  {/if}
</wrapper>

<style>
  wrapper {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin-left: 1em;
    border-radius: 15px;
    border: 2px solid #7d0e9e;
    -webkit-box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    box-shadow: 0 1px 30px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
    animation: 0.3s ease-in 0s 1 slideIn;
    transition: all 0.5s ease-in-out;
    justify-content: center;
    margin-left: 1em;
    background: transparent;
    background-color: rgba(59, 59, 59, 1);
    margin-bottom: 0;
    color: white;
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

  .card {
    width: 1000px;
    backdrop-filter: contrast(1.5);
    font-size: medium;
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    object-fit: cover;
    padding: 20px;
    height: 100%;
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

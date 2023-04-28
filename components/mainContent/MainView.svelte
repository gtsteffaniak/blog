<script>
  //import { marked } from 'marked';
  export let theme = "light";
  export let isMobile = false;
</script>

<wrapper>
  {#if isMobile}
    <div class="card" class:light-mode={theme === "light"} />
  {:else}
    <div class="card" class:light-mode={theme === "light"}>
      <div class="card-header">Title here of blog</div>
      <div class="ui divider" />
    </div>
  {/if}
</wrapper>

<style>
  wrapper {
    height: 100%;
    width: 100%;
    margin-left: 1em;
  }
  @media (max-device-width: 768px) {
    wrapper {
      margin-left: 0;
    }
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

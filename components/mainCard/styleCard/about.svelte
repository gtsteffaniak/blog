<script>
  export let theme = {};
</script>

<div class="myDiv" class:darkBackground={!theme.lightmode}>
  <p>Hi, my name is Graham.</p>
  <p>I have thoughts on things.</p>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    class="placeholder"
    loading="lazy"
    max-height="150px"
    width="150px"
    style="margin-bottom:1em"
    src="https://media.licdn.com/dms/image/C4E03AQEqh-nXpLMAGg/profile-displayphoto-shrink_800_800/0/1579543648199?e=2147483647&v=beta&t=McvHTjZPNKxFWdOqFI_WmmE6qqbBt6ZaXao1H7IFaOE"
    alt="Description of Image"
  />
  <p>You can view my github here:</p>
  <a href="https://github.com/gtsteffaniak">gtsteffaniak.git</a>
</div>

<style>
  .myDiv {
    transition: opacity 1s;
    animation: 1s ease;
    background-color: #dcddde;
    font-size: medium;
    padding: 1em;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
    height: 100%;
    width: 100%;
    max-width: 1000px;
    border-radius: 1em;
  }
  .darkBackground {
    background-color: #221d23 !important;
  }
</style>

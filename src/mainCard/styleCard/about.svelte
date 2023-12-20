<script>
  export let theme = {};
</script>

<about class:darkBackground={!theme.lightmode}>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    class="placeholder"
    loading="lazy"
    max-height="150px"
    width="150px"
    style="margin-bottom:1em"
    src="https://avatars.githubusercontent.com/u/42989099?v=4"
    alt="Description of Image"
  />
  <p>Hello, my name is Graham.</p>
  <p>
    I am a software developer and tinkerer. I have a degree in computer
    information systems and am also a last-hour dropout of Electrical
    Engineering from <a
      href="https://ese.wustl.edu/academics/undergraduate-programs/Electrical-Engineering.html"
      >Washington University in Saint Louis, MO</a
    >. I was taking classes for years while employed and became very
    dissatisfied with the quality of education during the 2020 COVID pandemic.
  </p>
  <p>
    I was never against formal education, I was fully planning on graduating in
    2021. I really appreciate university expands your critical thinking, among
    other benefits. However, the system also has many drawbacks. I took many
    electives that were completely worthless to my education. Some of these
    electives were required to graduate because the deen liked the classes
    (thanks deen for making me spend $2,500 on a nonsense class). I always felt
    like the 4-5 year curriculum was way too padded with nonsense classes.
  </p>
  <p>
    But the real straw that broke the camel's back was in 2020 during the
    pandemic. I gave spring 2020 a pass and enrolled full-time in fall 2020.
    during the first 2 weeks of (virtual) class, I witnessed so many degraded
    elements of education my enthusiasm dropped off a cliff. For example, in my
    studio class in a normal year engineering students would invent things and
    show them off at the end of the semester. This year, they said we would do
    everything virtually and just pretend like we created something and
    virtually describe the steps we would have taken if we had. I thought "I
    don't want a COVID degree", and dropped out. Perhaps that was an
    overreaction, but I could afford not to waste my time and money to find out.
  </p>

  <p>
    so here I am, continuing my professional journey, but also my personal
    journey. I love technology and what it enables. This site is less of a blog
    and more of a way for me to present and try out new technology on my own.
  </p>
  <p>You can view my github here:</p>
  <a href="https://github.com/gtsteffaniak">gtsteffaniak.git</a>
</about>

<style>
  about {
    transition: opacity 1s;
    animation: 1s ease;
    font-size: medium;
    padding: 1em;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    max-width: 1000px;
    border-radius: 1em;
    background-color: #dcddde;
  }
  .darkBackground {
    background-color: #221d23 !important;
  }
  a {
    color: #7d0e9e;
  }
  a {
    color: #7d0e9e;
  }
  .darkBackground > a,
  .darkBackground > * > a {
    color: rgb(176, 90, 207);
  }
</style>

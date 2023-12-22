<!-- SnowEffect.svelte -->
<script>
  import { onMount } from "svelte";
  export let postOutput = "";

  let snowDiv;
  let snowStormInstance;

  onMount(() => {
    snowDiv.setAttribute("id", "snowDiv");
    import("./snowstorm.js").then((module) => {
      snowStormInstance = new module.startSnow({
        // pass any necessary configuration here
        targetElement: "snowDiv",
        autoStart: true,
        // other configurations...
      });
      snowStormInstance.start();
    });
  });
</script>

<div bind:this={snowDiv} class="canvas">
  <snow>
    {@html postOutput}
  </snow>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>

  <div class="tree-parts">
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
    <div class="tree-part"></div>
  </div>
  <div class="house">
    <div class="front">
      <div class="a"></div>
      <div class="b"></div>
      <div class="c"></div>
      <div class="d"></div>
      <div class="e"></div>
      <span class="f"></span><span class="f"></span><span class="f"></span><span
        class="f"
      ></span><span class="f"></span><span class="f"></span>
      <div class="g"></div>
      <div class="k"></div>
    </div>
    <div class="side">
      <div class="wall-snow"></div>
      <div class="w-area">
        <div class="w-outer"></div>
        <div class="window">
          <div class="w-inner"></div>
          <div class="w-shadow"></div>
        </div>
      </div>
      <div class="w-area">
        <div class="w-outer"></div>
        <div class="window">
          <div class="w-inner"></div>
          <div class="w-shadow"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="ground-d"></div>
  <div class="ground-a"></div>
  <div class="ground-b"></div>
  <div class="ground-c"></div>
</div>

<style>
  .canvas {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: radial-gradient(circle, rgba(37,39,40,1) 9%, rgba(36,36,36,1) 58%, rgba(57,84,106,1) 100%);
    border-radius: 6px;
    box-shadow: 0px 0px 52px -10px rgba(23, 102, 90, 1);
  }

  .house {
    position: absolute;
    left: 130px;
    bottom: 40px;
    height: 370px;
    z-index: 0;
  }

  .front {
    clip-path: polygon(50% 0%, 5% 100%, 95% 100%);
    height: 370px;
    width: 280px;
    background-color: #77545c;
    position: absolute;
    left: 0;
    top: 0;
  }

  .front:before {
    width: 170px;
    position: absolute;
    left: 41px;
    height: 17px;
    content: "";
    z-index: 1;
    bottom: 0;
    background-color: #e3e7ec;
    transform: skew(-60deg);
  }

  .front .a {
    clip-path: polygon(61% 0px, 53.82% 72.15%, 0px 100%, 53% 0px);
    transform: rotate(-3deg);
    background-color: #583642;
    position: absolute;
    left: 16px;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .front .b {
    clip-path: polygon(61.7% 3px, 8.28% 104.6%, -11px 101.62%, 44.48% -6px);
    background-color: #77545c;
    position: absolute;
    right: -9px;
    transform: rotateY(-147deg);
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
  }

  .front .c {
    clip-path: polygon(53.87% 20.38%, 18% 100%, 86.29% 99.73%);
    height: 370px;
    width: 280px;
    background-color: #8e4940;
    position: absolute;
    top: 0;
    left: 0;
  }

  .front .f {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #a95b41;
    z-index: 2;
    left: 150px;
    bottom: 0;
    border-radius: 50%;
    box-shadow:
      0 0 0 3px #a95b41 inset,
      0 0 0 4px rgba(65, 10, 34, 0.25) inset;

    &:after {
      content: "";
      position: absolute;
      border: 1px solid rgba(65, 10, 34, 0.25);
      border-radius: 50%;
      width: 9px;
      height: 9px;
      left: 5px;
      top: 5px;
    }

    &:before {
      content: "";
      position: absolute;
      border: 1px solid rgba(65, 10, 34, 0.25);
      border-radius: 50%;
      width: 5px;
      height: 5px;
      left: 7px;
      top: 7px;
    }

    &:nth-of-type(2) {
      left: 170px;
    }
    &:nth-of-type(3) {
      left: 190px;
    }
    &:nth-of-type(4) {
      left: 180px;
      bottom: 16px;
    }
    &:nth-of-type(5) {
      left: 160px;
      bottom: 16px;
    }
    &:nth-of-type(6) {
      left: 170px;
      bottom: 33px;
    }
  }

  .front .g {
    position: absolute;
    width: 100px;
    height: 52px;
    bottom: 0;
    left: 170px;
    background-color: #410a22;
    z-index: 1;
    transform: skew(-30deg);
  }

  .front .e {
    position: absolute;
    bottom: 12px;
    z-index: 1;
    left: 122px;
    width: 42px;
    border-left: 10px solid;
    border-top: 10px solid;
    border-right: 10px solid;
    border-color: #9b5642;
    height: 110px;
    background-color: #69424d;
    box-shadow:
      4px 4px 0 0 #4d323e inset,
      2px 0 0 #7d402f;
  }

  .front .e:after,
  .front .e:before {
    content: "";
    position: absolute;
    left: 10px;
    width: 10px;
    height: 38px;
    background-color: rgba(#4d323e, 0.45);
    box-shadow: 15px 0 0 0 rgba(#4d323e, 0.45);
  }

  .front .e:after {
    top: 10px;
  }
  .front .e:before {
    top: 60px;
  }

  .front .k {
    position: absolute;
    border: 2px solid #4d323e;
    width: 40px;
    height: 60px;
    top: 150px;
    left: 132px;
    background: linear-gradient(
      118deg,
      rgba(225, 150, 96, 1) 12%,
      rgba(253, 213, 141, 1) 65%
    );
    box-shadow: 2px 2px 0 inset #8f4b41;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      top: 14px;
      left: 0;
      background-color: #4d323e;
      box-shadow:
        0 16px 0 #4d323e,
        0 32px 0 #4d323e;
    }

    &:before {
      content: "";
      position: absolute;
      width: 2px;
      height: 100%;
      top: 0;
      left: calc(50% - 1px);
      background-color: #4d323e;
    }
  }

  .side {
    position: absolute;
    width: 460px;
    height: 370px;
    clip-path: polygon(20px 1px, 67.61% 5px, 100% 100%, 31.53% 100.54%);
    top: 0;
    left: 120px;
    background: linear-gradient(
      200deg,
      rgba(187, 46, 45, 1) 12%,
      rgba(122, 52, 60, 1) 98%
    );

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      color: #e4a06880;
      background-color: currentColor;
      left: 140px;
      top: 0;
      transform: skew(20deg);
      box-shadow:
        6px 0 0,
        60px 0 0,
        66px 0 0,
        120px 0 0,
        126px 0 0,
        180px 0 0,
        186px 0 0;
      z-index: -1;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 20px;
      background: #b1302f;
    }
  }

  .window {
    position: absolute;
    left: 129px;
    top: 80px;
    clip-path: polygon(50% 30%, 0% 100%, 100% 100%);
    background-color: #5c3944;
    width: 60px;
    height: 60px;
    z-index: 2;
  }

  .w-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(118deg, #e19660 47%, #fdd58d 65%);
    right: 3px;
    top: 0;
    clip-path: polygon(50% 30%, 0% 100%, 100% 100%);

    &:after {
      content: "";
      width: 100%;
      height: 3px;
      background-color: #5c3944;
      position: absolute;
      top: 41px;
      left: 0;
    }

    &:before {
      content: "";
      width: 3px;
      height: 100%;
      background-color: #5c3944;
      position: absolute;
      top: 0;
      left: 50%;
    }
  }

  .w-shadow {
    position: absolute;
    left: -62%;
    top: 0;
    width: 100%;
    height: 100%;
    transform: rotate(25deg);
    background-color: rgba(0, 0, 0, 0.15);
  }

  .w-outer {
    position: absolute;
    top: 70px;
    left: 124px;
    width: 70px;
    height: 70px;
    clip-path: polygon(50% 30%, 0% 100%, 100% 100%);
    background: #955853;
  }

  .w-area:before {
    position: absolute;
    left: 100px;
    top: 80px;
    height: 70px;
    width: 60px;
    clip-path: polygon(16px 51.85%, 46.99% 17px, 98.33% 11px, 40.67% 85.71%);
    content: "";
    background: linear-gradient(0deg, #611e22 0%, #ab2c2a 100%);
  }

  .w-area:nth-child(2) {
    position: absolute;
    left: 120px;
  }

  .ground-a {
    position: absolute;
    left: -5%;
    bottom: -70px;
    width: 280px;
    height: 180px;
    border-radius: 40%;
    background-color: #f6f5ff;
    transform: rotate(25deg);
    z-index: 2;

    &:after {
      content: "";
      position: absolute;
      left: -20px;
      top: 20px;
      width: 160px;
      height: 100px;
      transform: rotate(-25deg);
      background-color: #fff;
      border-radius: 50%;
    }
  }

  .ground-b {
    position: absolute;
    left: 400px;
    bottom: -80px;
    height: 160px;
    width: 250px;
    background-color: #fff;
    z-index: 1;
    transform: scaleX(1.2) skewx(20deg);
    border-radius: 80% 25%;
  }

  .ground-c {
    position: absolute;
    left: 300px;
    bottom: -70px;
    height: 120px;
    width: 200px;
    background-color: #edf1f7;
    z-index: 1;

    border-radius: 80% 65%;
  }

  .ground-d {
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #f6f5ff;
    z-index: 1;
  }

  .tree {
    position: absolute;
    clip-path: polygon(50% 0%, 15% 100%, 88% 100%);
    width: 500px;
    height: 150%;

    &:nth-child(1) {
      background-color: blue;
      top: -160px;
      left: -114px;
    }

    &:nth-child(2) {
      background-color: #339580;
      top: 10%;
      left: -7%;
      z-index: 0;
    }

    &:nth-child(3) {
      background-color: #339580;
      top: 50px;
      left: 5%;
    }

    &:nth-child(4) {
      background-color: #1c6f61;
      top: -100px;
      left: 10%;
    }

    &:nth-child(5) {
      background-color: #339580;
      top: -20px;
      left: 240px;
      z-index: 0;
    }

    &:nth-child(6) {
      background-color: #339580;
      top: -20px;
      left: 460px;
    }

    &:nth-child(7) {
      background-color: #17665a;
      top: 120px;
      left: 560px;
    }

    &:nth-child(8) {
      background-color: #024b41;
      top: 300px;
      left: 510px;
      z-index: 3;
      width: 400px;
    }

    &:nth-child(9) {
      background-color: #024b41;
      top: 440px;
      left: 360px;
      z-index: 0;
      width: 500px;
    }

    &:nth-child(10) {
      background-color: #0c332d;
      top: 300px;
      left: 560px;
      z-index: 3;
      width: 500px;
    }

    &:nth-child(11) {
      background-color: #26816f;
      top: 0px;
      left: 70%;
    }
    &:nth-child(13) {
      background-color: #024b41;
      top: 100px;
      left: 60%;
    }
    &:nth-child(12) {
      background-color: #26816f;
      top: -40px;
      left: -150px;
    }
  }

  snow {
    padding: 20px;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    z-index: 1000;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    max-width: 750px;

  }
</style>

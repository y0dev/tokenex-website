const { animateDonut } = require("./animation.donut");
const { animatePCB, onWindowResizeForPCB } = require("./animation.pcb");
const {
  animateSphere,
  onWindowResizeForSphere,
} = require("./animation.sphere");
const { animateWave, onWindowResizeForWave } = require("./animation.wave");

/* eslint-disable */
const navbar = document.querySelector("header nav #navbar");

if (navbar) {
  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("hidden");
    searchForm.classList.remove("scale-y-100");
  };

  const searchForm = document.querySelector(".search-form");
  document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("scale-y-100");
    navbar.classList.add("hidden");
  };

  window.onscroll = () => {
    navbar.classList.add("hidden");
    searchForm.classList.remove("scale-y-100");
  };
}

// animateDonut();

animateWave();
window.addEventListener("resize", onWindowResizeForWave);

animateSphere();
window.addEventListener("resize", onWindowResizeForSphere);

animatePCB();
window.addEventListener("resize", onWindowResizeForPCB);

const { animateDonut } = require("./animation.donut");
const { animateWave } = require("./animation.wave");

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

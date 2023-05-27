"use strict";

const hamburgerEl = document.querySelector(".hamburger");
const navigationEl = document.querySelector(".navigation");
const closeEl = document.querySelector(".close");

hamburgerEl.addEventListener("click", function () {
  let currentEl = this;

  navigationEl.classList.toggle("show");
  closeEl.classList.toggle("show");
  currentEl.classList.toggle("hide");
});

closeEl.addEventListener("click", function () {
  let currentEl = this;

  navigationEl.classList.toggle("show");
  hamburgerEl.classList.toggle("hide");
  currentEl.classList.toggle("show");
});

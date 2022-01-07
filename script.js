const hamburger = document.querySelector(".lines");
const nav = document.querySelector("#nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  effect: "flip",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  let loader = document.getElementById("loader-wrapper");
  setTimeout(() => {
    loader.classList.add("slide-down");
  }, 1800);
  setTimeout(() => {
    document.querySelector(".flip-animate").classList.add("slide-up");
    document.querySelector(".fill-from-left").classList.add("fade-in");
    document.querySelector(".percent").classList.add("fade-in");
    document.querySelector(".text").classList.add("fade-in");
    document.querySelector(".container").classList.add("fade-in");
    document.getElementById("logo").classList.add("active");
    phoneLoaded();
  }, 2000);
});
anime({
  targets: "#loader-wrapper2 svg path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInQuad",
  duration: 1600,
  delay: 0,
  direction: "alternate",
  loop: true,
});

function phoneLoaded() {
  setTimeout(() => {
    let loader2 = document.getElementById("loader-wrapper2");
    loader2.classList.add("slide-down");
  }, 3000);
  document.getElementById("phoneLogo").classList.add("active");
}

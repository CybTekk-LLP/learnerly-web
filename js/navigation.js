let hamburger = document.querySelector(".ham");
let menu = document.querySelector(".toggle-menu");
let navScreen = document.querySelector(".navigation");
let featured = document.querySelector(".featured");
let dashboard = document.querySelector(".dashboard");
let screen = document.querySelector(".real-phone");
let downloadTag = document.querySelector(".nav-right a");

menu.addEventListener("click", slideNavMenu);

function slideNavMenu() {
  hamburger.classList.toggle("active");
  if (hamburger.classList.contains("active")) {
    navScreen.classList.add("slide-up-phone");
    setTimeout(() => {
      navScreen.classList.remove("slide-down");
    }, 1000);
  } else {
    navScreen.classList.remove("slide-up-phone");
    navScreen.classList.add("slide-down");
  }
}

featured.addEventListener("click", featuredFlow);

function featuredFlow() {
  slideNavMenu();
  screen.style.backgroundColor = "transparent";
  downloadTag.style.display = "inline";
}

dashboard.addEventListener("click", dashboardFlow);

function dashboardFlow() {
  slideNavMenu();
  screen.style.backgroundColor = "#F6F6F7";
  downloadTag.style.display = "none";
}

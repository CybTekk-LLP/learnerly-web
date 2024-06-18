const magnetTargets = document.querySelectorAll(".magnet");

magnetTargets.forEach((magnetTarget) => {
  magnetTarget.addEventListener("mousemove", function (e) {
    const position = magnetTarget.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    magnetTarget.children[0].style.transform =
      "translate(" + x * 0.5 + "px, " + y * 0.5 + "px)";
  });
});
magnetTargets.forEach((magnetTarget) => {
  magnetTarget.addEventListener("mouseout", function (e) {
    magnetTarget.children[0].style.transform = "translate(0px, 0px)";
  });
});

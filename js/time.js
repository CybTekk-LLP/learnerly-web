// setInterval(getTime, 1000);

// function getTime() {
//   const date = new Date();
//   document.getElementById("time").textContent = date.toLocaleTimeString();
// }

setInterval(getTime, 1000 * 60);
// This has an error of ±1 minute.
function getTime() {
  const today = new Date();
  document.getElementById("time").textContent =
    today.getHours().toString().padStart(2, "0") +
    ":" +
    today.getMinutes().toString().padStart(2, "0");
}
getTime();

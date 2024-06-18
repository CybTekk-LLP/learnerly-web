let noWifi = document.getElementById("no-wifi");
noWifi.style.opacity = 0;
window.addEventListener("online", () => (noWifi.style.opacity = 0));
window.addEventListener("offline", () => (noWifi.style.opacity = 1));

// Experimental Technology

try {
  let type = navigator.connection.effectiveType;
  let networkText = document.getElementById("network-speed");
  function updateConnectionStatus() {
    networkText.textContent = navigator.connection.effectiveType
      .toString()
      .toUpperCase();
    type = navigator.connection.effectiveType;
  }
  updateConnectionStatus();

  navigator.connection.addEventListener("change", updateConnectionStatus);
} catch (e) {
  console.log(e);
}

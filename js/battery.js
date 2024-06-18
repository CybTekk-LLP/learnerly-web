// This might only work in chrome, edge, opera, samsung internet as of 23/07/2023 and this api bound to be removed due to security concerns. However, to get the Actual status of battery, this navigator property was my only option to make the real phone UI.
try {
  let batteryWidth = document.getElementById("battery-width");
  let batteryIsCharging = document.querySelector(".charging");
  navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
      updateChargeInfo();
      updateLevelInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener("chargingchange", () => {
      updateChargeInfo();
    });
    function updateChargeInfo() {
      if (!!battery.charging) batteryIsCharging.style.opacity = 1;
      else batteryIsCharging.style.opacity = 0;
    }

    battery.addEventListener("levelchange", () => {
      updateLevelInfo();
    });
    function updateLevelInfo() {
      batteryWidth.style.width = `${7.5 * battery.level}px`;
    }
  });
} catch (e) {
  console.log(e);
}

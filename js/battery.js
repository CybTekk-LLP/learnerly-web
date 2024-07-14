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

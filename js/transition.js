let timeout;
document.onmousemove = function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    alert("move your mouse");
  }, 60000);
};

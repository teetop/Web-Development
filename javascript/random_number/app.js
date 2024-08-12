document.getElementById("butt").onclick = function () {
  var num = Math.floor(Math.random() * 6) + 1;

  document.getElementById("num").innerHTML = num;
};

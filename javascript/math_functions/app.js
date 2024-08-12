var a;
var b;
var c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("Side C:", c);

a = document.getElementById("a").value;
a = Number(a);

b = document.getElementById("b").value;
b = Number(b);

document.getElementById("submit").onclick = function () {
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("cLabel").innerHTML = "Side C is " + c;
};

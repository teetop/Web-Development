var myName = "Michael Dean";
var age = 21;
var rich = true;

console.log(
  "Hi",
  myName,
  ", you are",
  age,
  "years old and your rich status is",
  rich
);

document.getElementById("p1").innerHTML = "Hi " + myName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Your rich status is: " + rich;




let userInput = window.prompt("What is your name?")
console.log(userInput)



let username;

let doc = document.getElementById("myButton");

doc.onclick = function () {
  let text = document.getElementById("fullName");
  username = text.value;
  console.log(username);

  document.getElementById("label").innerHTML = "Hello, " + username + "!";
};

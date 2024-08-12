

let name = "";

do {
    name = window.prompt("Enter your name to be displayed");
    document.getElementById("show").innerHTML = "Your name entered is " + name;
} while (name === "" || name === null);
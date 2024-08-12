// let age = Number(window.prompt("Enter your age"));
let inp = document.getElementById("in");
let age = Number(inp.value);
console.log(age, typeof age);
document.getElementById("status").onclick = function() {
    if (age >= 18) {
        document.getElementById("if").innerHTML = "You are an adult";
    } else {
        document.getElementById("if").innerHTML = "You are a child";
    }
}


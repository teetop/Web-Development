

let age = window.prompt("How old are you?");

function getRank(age) {
    return determineRank(age) ? "You are an adult" : "You are a child";
}

function determineRank(age) {
    return age >= 18;
}

document.getElementById("result").innerHTML = getRank(age);
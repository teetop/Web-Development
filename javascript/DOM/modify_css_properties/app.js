const result = document.querySelector("#result");

result.style.backgroundColor = "pink";
result.style.textAlign = "center";
result.style.color = "#1d9a14";
result.style.border = "5px solid";
result.style.borderRadius = "15px";
result.style.fontFamily = "consolas";

//to make it disappearing and reappearing
setInterval(updateDisplay, 1000, result);

function updateDisplay() {
    return new Date().getSeconds() % 2 === 0
        ? result.style.display = "block"
        : result.style.display = "none";
}



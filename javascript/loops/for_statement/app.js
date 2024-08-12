let number = 0;
let prices = [];
while (number >= 0) {
    number = window.prompt("Enter number");
    if (number >= 0)
        prices.push(number);
}

for (let price of prices) {
    document.getElementById("result").innerHTML += `${price}<br>`;
   // document.getElementById("result").innerHTML += "<br>";
}
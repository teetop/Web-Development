/*TODO: array.reduce()
    reduces an array to a single value
*/

let prices = [120, 900, 105, 75, 230];

function checkOut(total, price) {
    return total + price;
}

let total = prices.reduce(checkOut);
document.getElementById("result").innerHTML = `The total is ${total}`;


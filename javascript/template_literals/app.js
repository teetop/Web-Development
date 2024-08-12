let userName = window.prompt("What is your name?");
let items = window.prompt("How many items did you buy?");
let total;

document.getElementById("result").innerHTML =
    getResult(userName, items);

function getResult(customerName, numbersOfItems) {
    let total = items * 120;
    return `Hi ${customerName},<br>
            You have ${numbersOfItems} items in your cart.<br>
            The total is ${total}`;
}

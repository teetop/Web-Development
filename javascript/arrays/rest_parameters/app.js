/* TODO: REST PARAMETERS (...)
    This represents an indefinite number
    of parameters.
    (It packs arguments into an array)
 */
let userInput = Number(window.prompt("Enter your own number"));
let result = sum(userInput, 34, 54, 12, 65, 76, 34, 23, 45)

document.getElementById("result").innerHTML = result.toString();

function sum(userInput,...num) {
    let total = 0;
    for (const numElement of num) {
        total += numElement;
    }
    return total + userInput;
}
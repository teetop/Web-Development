/*TODO: SPREAD OPERATOR (...)
    allows an iterable such as an array
    to be expanded in places where zero
    or more arguments are expected
    (unpack the elements)
*/

let num = 0;
let numbers = [];
while (num >= 0) {
    num = window.prompt("Enter positive number to add to array or enter negative to stop")
    if (num > 0) {
        numbers.push(num)
    }
}
let max = Math.max(...numbers);
let min = Math.min(...numbers)
document.getElementById("result").innerHTML = "Numbers are: "
for (const number of numbers) {
    document.getElementById("result").innerHTML += `${number}, `
}
document.getElementById("max").innerHTML = `The maximum number is ${max}`
document.getElementById("min").innerHTML = `The minimum number is ${min}`
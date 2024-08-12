/* TODO: array.forEach()
    executes a provided callback function
    once for each array
*/

let names = ["james", "john", "michael"];
names.forEach(capFirstLetter);
names.forEach(displayDOM)

function capFirstLetter(value, index, array) {
    array[index] = value[0].toUpperCase() + value.substring(1);
}

function displayDOM(output) {
    document.getElementById("result").innerHTML += `${output}<br>`;
}
/*TODO: array.array_map()
    executes a provided callback fucntion
    once for each array element
    and creates a new array
*/



function square(element) {
    return Math.pow(element, 2);
}
function cube(element) {
    return Math.pow(element, 3);
}

function displayDOM(element) {
    document.getElementById("result").innerHTML += element + "<br>";
}
let numbers = [1, 2, 3, 4, 5, 6];
let squares = numbers.map(square);
let cubes = numbers.map(cube);
cubes.forEach(displayDOM)

//todo:--------------------------------------------------------------------------------------
function returnSquare(squares, displayFunc) {
    for (let square of squares) {
        square = square * square;
    }
    displayFunc(...squares);
}

function display(...arrays) {
    for (const array of arrays) {
        document.getElementById("result").innerHTML += array + "<br>";
    }
}

returnSquare(squares, display)


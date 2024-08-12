
let height = window.prompt("Enter the height");
let width  = window.prompt("Enter the width");
let area;

function calculateArea(incomingHeight, incomingWidth) {
    return incomingHeight * incomingWidth;
}

area = calculateArea(height, width)

document.getElementById("result").innerHTML =
    "The area is " + area;
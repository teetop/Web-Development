/*TODO: array.filter()
    creates a new array with all elements
    that passes the test provided by a function
*/


let studentAges = [12, 32, 19, 33, 17, 18, 16, 15, 30, 34];
const benchMarkAge = 18;

let children = studentAges.filter(childrenAges);
let adults = studentAges.filter(adultAges);


function childrenAges(age) {
    return age < benchMarkAge;
}

function adultAges(age) {
    return age >= benchMarkAge;
}


function displayChildren(element) {
    document.getElementById("children").innerHTML += element + "<br>";
}

function displayAdult(element) {
    document.getElementById("adult").innerHTML += element + "<br>";
}

document.getElementById("children").innerHTML = `Children <br>`;
children.forEach(displayChildren)
document.getElementById("adult").innerHTML = "Adult" + "<br>";
adults.forEach(displayAdult)

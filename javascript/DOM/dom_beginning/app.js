// /*TODO: DOM (Document Object Model (API))
//         An interface for changing the content of a page
// */
//
// //HEAD
document.title = "DOM API";
let result = document.getElementById("result");
result.innerHTML += document.title + "<br>";
result.style.backgroundColor = "lightgreen"

//document.getElementById("result").innerHTML += document.URL;

//BODY

//BY ELEMENTS NAME
document.body.style.backgroundColor = "pink";
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if (fruit.checked) {
        console.log(fruit.id);
    }
})
//-----------------------------------------------------------
//BY TAG NAME
let clubs = document.getElementsByTagName("li");
clubs[0].style.backgroundColor = "blue";
clubs[1].style.backgroundColor = "red";
clubs[2].style.backgroundColor = "green";

//-----------------------------------------------------------
//BY CLASS NAME
let paymentMethod = document.getElementsByClassName("payment");
paymentMethod[0].style.backgroundColor = "#e9e9eb";
paymentMethod[1].style.backgroundColor = "#8b8bbe";
paymentMethod[2].style.backgroundColor = "#eba12d";

//-----------------------------------------------------------
//QUERY SELECTOR
// precede with . for class, # for id, [] for attributes
//querySelector picks the first element
let element = document.querySelector(".payment");
console.log(element.innerHTML);

//-----------------------------------------------------------
//QUERY SELECTOR ALL
//This picks all the elements
let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "#eba12d";
})
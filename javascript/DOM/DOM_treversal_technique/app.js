

//let element = document.body;
//console.log(element);
//console.log(element.firstElementChild);
// element.firstElementChild.style.backgroundColor = "#dd5d17";
// element.firstElementChild.style.color = "#fbfbfb";

//accessing the last child of the body and redirecting his attribute from app.js to index.js
// console.log(element.lastElementChild.getAttribute("src"));
// element.lastElementChild.setAttribute("src", "index.js");
// console.log(element.lastElementChild.getAttribute("src"));

// let child = document.querySelector("#food");//food
// console.log(child.nextElementSibling); //soup
// console.log(child.previousElementSibling); //fruit

//trying to uae the first element child to get the last element child that is not the next element child
let fruits = document.querySelector("#food");
let child =fruits.firstElementChild;
console.log(child.parentElement.lastElementChild.innerHTML);




let foodElement = document.querySelector("#food");//food
//let child = foodElement.firstElementChild;
// console.log(child.innerHTML);
// let children = foodElement.children;
// console.log(children[0].innerHTML);
// children[0].innerHTML = "Spaghetti";
// console.log(children[0].innerHTML);

//let children  = Array.from(foodElement.children); //Array.from turns a collection to an array
//children.forEach(child => console.log(child.innerHTML));




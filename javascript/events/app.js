// document.getElementById("butt").onclick = function () {
//     alert("You have clicked the button!")
// }

function doSomething() {
    alert("You have done something");
}
//onclick
//document.getElementById("butt").onclick = () => alert("You have clicked the button!");

//onload
// const body = document.body;
// body.onload = doSomething;

//onchange
// const element = document.getElementById("result");
// element.onchange = doSomething;


//onmouseover, onmouseout
const divElement = document.createElement("div");
//divElement.textContent = "Hello";
divElement.style.backgroundColor = "rgb(250, 50, 0)";
divElement.style.width = "100px";
divElement.style.height = "100px";
divElement.style.textAlign = "center";
document.body.append(divElement);

divElement.onmouseover = () => {
    divElement.style.backgroundColor = "rgb(139,244,130)";
}
divElement.onmouseout = () => {
    divElement.style.backgroundColor = "rgb(250, 50, 0)";
}
divElement.onmousedown = () => {
    divElement.style.backgroundColor = "rgb(120,175,241)";
}
divElement.onmouseup = () => {
    divElement.style.backgroundColor = "rgb(228,225,101)";
}

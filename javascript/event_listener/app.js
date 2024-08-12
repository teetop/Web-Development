/*TODO: .addEventListener(event, function, useCapture)
        You can add many event handlers to one element
        Even the same event that invokes different functions
*/

const inner = document.querySelector("#inner");
const outer = document.querySelector("#outer");

inner.addEventListener("click", changeGreen);
outer.addEventListener("click", changeGreen, true); //giving preference to the outer div

function changeGreen() {
    alert("You selected " + this.id)
    this.style.backgroundColor = "#6af15c";
    this.style.border = "2px solid red";
}


// inner.addEventListener("mouseover", changeGreen);
//
// inner.addEventListener("mouseout", changePink);
//
// function changePink() {
//     inner.style.backgroundColor = "#FF1493";
//     inner.style.border = "2px solid black";
// }
//
// function changeGreen() {
//     inner.style.backgroundColor = "#6af15c";
//     inner.style.border = "2px solid red";
// }

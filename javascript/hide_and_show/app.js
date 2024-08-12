/*Todo: No need of stylesheet*/

const image = document.querySelector("#semi");
image.style.width = "300px"; //to change the width of the image;
//image.style.display = "none"; //hide the image from the beginning
image.style.visibility = "hidden"; //using visibility instead of display: visibility maintain the space of the element

const button = document.querySelector("#butt");

button.addEventListener("click", showImage);

function showImage() {
    if (image.style.visibility === "hidden") {
        image.style.visibility = "visible"
    } else {
        image.style.visibility = "hidden";
    }
}

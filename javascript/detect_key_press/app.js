//To detect what key was pressed
//window.addEventListener("keydown", event => console.log(event.key));


const box = document.getElementById("divBox");
window.addEventListener("keydown", moveBox);
let x = 0;
let y = 0;

function moveBox(event) {
    if (event.key === "ArrowDown") {
        y += 5;
        box.style.top = y + "px";
    } else if (event.key === "ArrowUp") {
        y -= 5;
        box.style.top = `${y}px`;
    } else if (event.key === "ArrowRight") {
        x -= 5;
        box.style.right = `${x}px`;
    } else if (event.key === "ArrowLeft") {
        x += 5;
        box.style.right = `${x}px`;
    }

    // switch (event.key) {
    //     case "ArrowDown": {
    //         y += 5;
    //         box.style.top = y + "px";
    //         break;
    //     }
    //     case "ArrowUp": {
    //         y-= 5;
    //         box.style.top = `${y}px`;
    //         break;
    //     }
    //     case "ArrowLeft": {
    //         x += 5;
    //         box.style.right = `${x}px`;
    //         break;
    //     }
    //     case "ArrowRight": {
    //         x -= 5;
    //         box.style.right = `${x}px`;
    //         break;
    //     }
    // }
}
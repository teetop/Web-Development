//TODO: setTimeout

let num = 0;
let sec = 0;

let counter = window.prompt("How many times you wanna count along?")
counter = Number(counter);

document.getElementById("result").innerHTML = num.toString();

document.getElementById("butt").onclick = () => {
    for (let i = 0; i < counter; i++) {
        setTimeout(increaseToOne, sec);
        sec += 500;
    }
}

function increaseToOne() {
    num++;
    document.getElementById("result").innerHTML = String(num);
}

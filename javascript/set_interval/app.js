/*TODO: setInterval: invokes a function repeatedly after
                    a number of milliseconds
                    asynchronous function
                    (does not pause execution)
*/

let count = 0;
let max = window.prompt("To what number?");
let timer;
max = Number(max);
document.getElementById("result").innerHTML = String(count);

document.getElementById("butt").onclick = function () {
    timer = setInterval(counter, 1000, max);
     // document.getElementById("result").innerHTML = "End of count";
}

function counter(maximumCount) {
    count++;
    document.getElementById("result").innerHTML = String(count);
    if (count >= maximumCount) {
        clearInterval(timer);
    }
}
const display = document.querySelector("#timeDisplay");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let startTime = 0;
let elapseTime = 0;
let currentTime = 0;
let hours = 0;
let minutes = 0;
let secs = 0;
let paused = true;
let intervalId;

start.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapseTime;
        intervalId = setInterval(updateTime, 1000);
    }
});

function updateTime() {
    elapseTime = Date.now() - startTime;
    secs = Math.floor((elapseTime / 1000) % 60);
    minutes = Math.floor((elapseTime / (1000 * 60)) % 60);
    hours = Math.floor((elapseTime / (1000 * 60 * 60)) % 60);

    hours = addZeroes(hours);
    minutes = addZeroes(minutes);
    secs = addZeroes(secs);

    display.textContent = `${hours}:${minutes}:${secs}`;

    function addZeroes(unit) {
        return ("0" + unit).length > 2 ? unit : "0" + unit;
    }
}

pause.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapseTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
})
reset.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapseTime = 0;
    currentTime = 0;
    hours = 0;
    minutes = 0;
    secs = 0;
    display.textContent = "00:00:00";
})
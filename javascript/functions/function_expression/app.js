/* TODO: Function expression:
        is an anonymous function (function without a name)
        avoid polluting the global scope with names.
        Write it, then forget about it!
 */


let count = 0;

document.getElementById("decrease").onclick = function () {
    if (count === 0) {
        // count = 0;
        document.getElementById("num").innerHTML = count;
        window.alert("Count cannot reduce beyond 0");
    } else {
        count -= 1;
        document.getElementById("num").innerHTML = count;
    }
};

document.getElementById("increase").onclick = function () {
    count += 1;
    document.getElementById("num").innerHTML = count;
};

document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("num").innerHTML = count;
};


let temp = document.getElementById("temp").value;

document.getElementById("sub").onclick = function () {
    if (document.getElementById("celsius").checked) {
        let cel = Number(temp);
        document.getElementById("result").innerHTML =
            String(getCelsius(cel))
    } else if (document.getElementById("fah").checked) {
        let fah = Number(temp);
        document.getElementById("result").innerHTML =
            String(getFah(fah))
    } else {
        document.getElementById("result").innerHTML =
            "You have not selected any"
    }

}

function getCelsius(temperature) {
    return (temperature - 32) * (5/9);
}

function getFah(temperature) {
    return temperature * 9 / 5 + 32;
}
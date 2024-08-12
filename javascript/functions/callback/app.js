
sumAndDisplayResult(displayDOM, 43,54,23,65,87,12);


function sumAndDisplayResult(displayFunc, ...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    displayFunc(`The total is: ${total}`);
}

function displayDOM(output) {
    document.getElementById("result").innerHTML = output;
}
let randomNumber = Math.floor(Math.random() * 10 + 1);

let numberOfGuess;
let userGuess;

    document.getElementById("sub").onclick = function () {
        userGuess = document.getElementById("num").value;
        numberOfGuess++
        if (randomNumber === userGuess) {
            document.getElementById("result").innerHTML =
                `Hurray! ${userGuess} is correct.<br>
             it took you ${numberOfGuess} guesses`
        } else if (randomNumber > userGuess) {
            document.getElementById("result").innerHTML =
                `${userGuess} is too low`
        } else {
            document.getElementById("result").innerHTML =
                `${userGuess} is too high`
        }
        console.log(randomNumber)
    }

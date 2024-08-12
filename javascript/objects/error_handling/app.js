/*TODO: error: object with a description
                of something went wrong
        throw: executes a user-defined error
*/

try {
    let number = window.prompt("Enter only number");
    number = Number(number);
    if (isNaN(number)) {
        throw "That was not a number";
    }
    if (number =="") {
        throw "That was empty";
    }
     document.getElementById("result").innerHTML = `${number} is a number`;
} catch (error) {
    document.getElementById("result").innerHTML = `error message: ${error}`;
}
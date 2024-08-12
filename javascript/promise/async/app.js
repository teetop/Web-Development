/*TODO: ASYNC keyword: makes a function return a Promise
*/


//todo: this loadFile() method returns a PROMISE
async function loadFile() {
    let fileLoaded = true;
    // fileLoaded = false;
    if (fileLoaded) {
        return "File loaded successfully";
    } else {
        throw "File NOT loaded";
    }
}

//this would do the same as the function with the async keyword
// function readFile() {
//     let fileLoaded = false;
//     // fileLoaded = true;
//     if (fileLoaded) {
//         return Promise.resolve("File loaded successfully");
//     } else {
//         return Promise.reject("File NOT loaded");
//     }
// }

loadFile().then(value => console.log(value))
    .catch(error => console.log(error));
/*TODO: AWAIT: makes an async function wait for a Promise
*/

async function loadFile() {
    let fileLoaded = false;
    // fileLoaded = false;
    if (fileLoaded) {
        return "File loaded successfully";
    } else {
        throw "File NOT loaded";
    }
}


const promise = startProcess();
//await needs to be in an async function
async function startProcess() {
    try {
        let message = await loadFile();
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}
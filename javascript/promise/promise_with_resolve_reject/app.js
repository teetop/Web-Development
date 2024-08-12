/*TODO: PROMISE is an object that encapsulate
                the result of an asynchronous operation
                let asynchronous methods return values
                like synchronous methods
                "I promise to return something in the future"
                .
                the STATE is 'pending' then: 'fulfilled' or 'rejected'
                the RESULT is what can be returned
                2 parts producing and consuming
*/
 
const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;
    // fileLoaded = false;
    if (fileLoaded) {
        resolve("File loaded successfully");
    } else {
        reject("File NOT loaded");
    }
});

promise.then(value => console.log(value))
    .catch(error => console.log(error));
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

const wait = function (time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    })
}
wait(3000).then(() => console.log("Thanks for waiting"));
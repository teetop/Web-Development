/*TODO: NESTED FUNCTIONS
        are functions inside other functions.
        Outer functions have access to inner functions
        Inner functions are "hidden" from the outer functions.
        it's used in closures.
 */

let name = "Dean";
let inbox = 0;

function login() {
    displayName();
    displayInbox();

    function displayName() {
        document.getElementById("result").innerHTML +=
            `Hi ${name}<br>`;
    }

    function displayInbox() {
        document.getElementById("result").innerHTML +=
            `You have ${inbox} message(s)`;
    }
}

login()
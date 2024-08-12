function alerted(message) {
    document.getElementById("alert").innerHTML = message;
}

 document.getElementById("butt").onclick = function () {
    const isSub = document.getElementById("check").checked;

    if (isSub) {
        alerted("You are subscribed");
    } else {
        alerted("You are not subscribed")
    }
 }
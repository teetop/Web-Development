
function makePayment(id, message) {
    document.getElementById(id).innerHTML = message;
}
function paymentType(id){
    return document.getElementById(id).checked;
}

document.getElementById("makePayment").onclick = function () {
    const paid = document.getElementById("pay").checked;

    if (paid && paymentType("cash")) {
        makePayment("confirmation", "You made payment using CASH")
    } else if (paid && paymentType("card")) {
        makePayment("confirmation", "You made payment using CARD")
    } else if (paid && paymentType("rotary")) {
        makePayment("confirmation", "You made payment using your ROTARY")
    } else if (!paid){
        makePayment("confirmation", "You have yet to make payment")
    } else {
        makePayment("confirmation", "Select at least one payment mode");
    }
}





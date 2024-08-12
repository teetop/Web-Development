/*TODO: setTimeout(): invokes a funtion after a
        number of milliseconds asynchronous function
                (doesn't purse execution)
*/


let item = "Car";
let price = 120000;
//todo: using arrow function
let timer1 = setTimeout(firstMessage, 3000, item, price);//todo: the parameters are passed after the timeout
//todo: using function expression
let timer2 = setTimeout(function () {
    document.getElementById("result").innerHTML = "This is not a scam<br>";
}, 9000);
//todo: using callback
let timer3 = setTimeout(() => document.getElementById("result").innerHTML = "DO IT NOW!<br>", 12000);

function firstMessage(item, price) {
    document.getElementById("result").innerHTML = `Buy this ${item} for ${price}<br>`;
}

//todo: using arrow function instead of function expression
document.getElementById("butt").onclick = () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    document.getElementById("result").innerHTML = `You have bought the ${item}`;
}





let date = new Date();
//date = new Date("January 1, 2024");

//date = date.toDateString();
//date = date.toLocaleDateString();
// let unitDate = date.getFullYear();
let unitDate = date.getDate();
document.getElementById("result").innerHTML += unitDate.toString() + "<br><br>";

date.setFullYear(2022);
date.setMonth(10);
date.setDate(4);


date = date.toLocaleString();
document.getElementById("result").innerHTML += date+"<br><br>";


function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    month = getStringMonth(month);

    return `${month} ${day}, ${year}`
}

function getStringMonth(month) {
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    return month;
}
let newDate = new Date();

const formattedDate = formatDate(newDate);
document.getElementById("result").innerHTML += formattedDate;
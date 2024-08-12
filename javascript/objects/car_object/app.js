const car = {
    name: "Mercedes",
    color: "Black",
    year: 2024,


    drive: () => {
        document.getElementById("result").innerHTML += "Driving<br>";
    },
    start: () => {
        document.getElementById("result").innerHTML += "Starting<br>";
    }
}

document.getElementById("result").innerHTML += car.name + "<br>";
document.getElementById("result").innerHTML += car.year + "<br>";
car.start();
car.drive();
const car1 = {
    model: "Mercedes",
    color: "Black",
    year: 2024,


    drive: function () {
        document.getElementById("result").innerHTML += `Driving ${this.model}<br>`;
    },
    start: function () {
        document.getElementById("result").innerHTML += `Starting ${this.model}<br>`;
    }
}
const car2 = {
    model: "Range Rover",
    color: "Grey",
    year: 2023,


    drive: function (){
        document.getElementById("result").innerHTML += `Driving ${this.model}<br>`;
        console.log(`Driving ${this.model}`);
    },
    start: function (){
        document.getElementById("result").innerHTML += `Starting ${this.model}<br>`;
    }
}


car1.drive();
car2.drive();
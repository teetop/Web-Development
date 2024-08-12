/*TODO: static
        belongs to the class, not the objects
        static properties: useful for caches, fixed-configuration
        static methods:  useful for utility functions
*/

class Car {
    static numberOfCars = 0;

    constructor(model) {
        this.model = model;
        Car.numberOfCars++;
    }

    static startRace() {
        console.log("3...2...1...GO!");
    }
}


const player1 = new Car("Ferrari");
const player2 = new Car("Lambo");
const player3 = new Car("Range");

console.log(Car.numberOfCars);
Car.startRace();



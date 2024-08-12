/*TODO: SET: binds an object property to a function
            when that property is assigned a value
        GET: binds an object property to a function
            when that property is accessed
*/

class Car {

    _name;

    constructor(name, power) {
        this._name = name;
        this._power = power;
        this._gas = 25;
    }

    set gasVolume(gasVol) {
        this._gas = gasVol > 50 ? 50 : gasVol;
        this._gas= gasVol < 0 ? 0 : gasVol;  
    }

    get gasVolume() {
        return `${this._gas}L  (${this._gas / 50 * 100}%)`
    }

    set carPower(carPow) {
        this._power = carPow
    }

    get carPower() {
        return `${this._power}HP`
    }

    set carName(carName) {
        this._name = carName
    }

    get carName() {
        return this._name
    }
}

const car = new Car("Lambo", 2300);

console.log(car.carName);
console.log(car.carPower);
console.log(car.gasVolume);

car.carName = "Benzo";
car.gasVolume = -120;
console.log(car.carName);
console.log(car.gasVolume);
/*TODO: SUPER keyword
        refers to the parent class
        commonly used to invoke constructor
        of a parent class
*/

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age)
        this.swimSpeed = swimSpeed;
    }
}
class Cat extends Animal {
    constructor(name, age, walkSpeed) {
        super(name, age)
        this.walkSpeed = walkSpeed;
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age)
        this.flySpeed = flySpeed;
    }
}

const cat = new Cat("Fine Cat", 2, 12);
const fish = new Fish("Beautiful Fish", 1, 50);
const hawk = new Hawk("Gorgeous Hawk", 3, 120);

console.log(`Fish name: ${fish.name}`);
console.log(`Cat age: ${cat.age}`);
console.log(`Hawk name: ${hawk.name}`);
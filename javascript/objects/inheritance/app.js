

class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}
class Fish extends Animal{
    name = "Fish";
    swim() {
        console.log(`This ${this.name} is swimming`)
    }
}
class Cat extends Animal{
    name = "Cat";
    walking() {
        console.log(`This ${this.name} is cat walking`)
    }
}
class Falcon {
    name = "Falcon";
    fly() {
        console.log(`This ${this.name} is flying`)
    }
}

const fish = new Fish();
const cat = new Cat();
const falcon = new Falcon();

console.log(`it's ${fish.alive}, that this ${fish.name} is alive`)
fish.eat();
cat.sleep();
falcon.fly();
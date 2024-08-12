
let age = window.prompt("Enter your age");

console.log("age is a", typeof age, "before conversion");
age = Number(age);
console.log("age is a", typeof age, "after conversion");

age = age + 1;

console.log("You are", age, "years old");

let a;
let b;
let c;

a = Number("54.90");
b = String(54.9);
c = Boolean(""); //empty is false, while any value is true
const d = Number("One");

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

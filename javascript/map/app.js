/*TODO: Map -> are objects that holds key-value pairs of any data type.
*/


const studentInfo = new Map([
    ["James", 23],
    ["Kings", 13],
    ["Josh", 18],
    ["Michael", 21],
]);

console.log(studentInfo.get("James"));
studentInfo.set("Orman", 23);
//studentInfo.delete("Orman");
console.log(studentInfo.has("Orman"));
console.log(studentInfo.size);


studentInfo.forEach((value, key) =>
    document.getElementById("result").innerHTML += `${key} is ${value} years old<br>`
)
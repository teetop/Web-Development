/*TODO: SPREAD OPERATOR (...)
    allows an iterable such as an array
    to be expanded in places where zero
    or more arguments are expected
    (unpack the elements)
*/

let firstSet = ["James", "John", "Sam", "Kings"];
let secondSet = ["Karmal", "Sherriff", "Yussuf", "Haneefa"];

firstSet.push(...secondSet);
firstSet.sort();
for (let i = 0; i < firstSet.length; i++) {
    document.getElementById("result").innerHTML += firstSet[i];
    if (i < (firstSet.length - 1)) {
        document.getElementById("result").innerHTML += ", "
    }
}
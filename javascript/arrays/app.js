

//TODO: ARRAYS

let namesOfStudent = ["James", "Dean", "Macron", "Bush", "Orleans"];
let agesOfStudent = [12, 21, 32, 12, 43];


// console.log(namesOfStudent); //to print all the elements in the array
// console.log(agesOfStudent);

// for (let i = 0; i < namesOfStudent.length ; i++) {
//     console.log(`${namesOfStudent[i]} is ${agesOfStudent[i]} years old`)
// }
namesOfStudent.push("Josh");//to add an element at the end of the array
namesOfStudent.pop();//to remove an element at the end of the array
namesOfStudent.unshift("Michael");//to add an element at the beginning of the array
namesOfStudent.shift();//to remove an element at the beginning of the array
console.log(namesOfStudent.indexOf("Macron"));//to know the index of an element in an array


console.log(namesOfStudent);
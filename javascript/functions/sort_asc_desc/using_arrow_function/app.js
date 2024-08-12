/*TODO: arrow function ( => )
        is a compact alternative to a traditional function expression
*/

let grades = [23, 43, 89, 54, 90, 100, 29, 92];

//todo: DESCENDING ORDER
grades = grades.sort(
    (smaller, greater) => greater - smaller
);

//todo: ASCENDING ORDER
// grades = grades.sort(
//     (smaller, greater) => smaller - greater
// );

//TODO: TO PRINT IN DOM
grades.forEach(
    element => document.getElementById("result").innerHTML += element + "<br>"
);


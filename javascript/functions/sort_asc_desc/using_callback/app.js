

let grades = [23, 43, 89, 54, 90, 100, 29, 92];

function ascendingSort(smaller, greater) {
    return smaller - greater;
}
function descendingSort(smaller, greater) {
    return greater - smaller;
}
function displayDOM(array) {
    for (const arrayElement of array) {
        document.getElementById("result").innerHTML += arrayElement+ "<br>";
    }
}

//grades = grades.sort(descendingSort);
grades = grades.sort(ascendingSort);

displayDOM(grades);


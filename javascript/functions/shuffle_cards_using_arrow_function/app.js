const newCards = array => {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex--;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K"];
newCards(cards).forEach(
    element => document.getElementById("result").innerHTML += element + "<br>"
);
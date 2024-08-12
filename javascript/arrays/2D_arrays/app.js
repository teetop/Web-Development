let groceries = [
    ["Rice", "Beans", "Yam", "Swallow"],
    ["Stew", "Egusi", "Vegetable", "Draw"],
    ["Meat", "Kpomo", "Chicken", "Turkey", "Fish"]
];


for (const grocery of groceries) {
    for (const item of grocery) {
        document.getElementById("result").innerHTML += `${item}<br>`
    }
   document.getElementById("result").innerHTML += "~end of a list~<br>"
}


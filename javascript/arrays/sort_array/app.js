let names = ["James", "Orman", "Kingsley", "Mandie"];
names = names.sort();
// names = names.sort().reverse();
for (const name of names) {
    document.getElementById("result").innerHTML += name + "<br>";
}
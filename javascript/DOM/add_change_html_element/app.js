/*TODO: create/add/change HTML element
        .inneHTML (vulnerable to XSS attack)
        .textContent (more secure)
*/

const nameTag = document.createElement("h2");
//nameTag.setAttribute("id", "myId");
//console.log(nameTag.id);

nameTag.style.backgroundColor = "#eba12d";
nameTag.textContent = "My name is Dean";
document.body.append(nameTag);


const myList = document.querySelector("#food"); //to get element
const foodItem1 = document.createElement("li"); //to create an element
const foodItem2 = document.createElement("li");
foodItem2.textContent = "Amala";
foodItem1.textContent = "Spaghetti";
myList.append(foodItem2);   //to add at the end of the list
myList.prepend(foodItem1);  //to add at the beginning of the list
//to add in between the elements
const foodItem3 = document.createElement("li");
foodItem3.textContent = "Noddles";
const foodList = myList.getElementsByTagName("li");
myList.insertBefore(foodItem3, foodList[2]);    //added Noddles before Beans


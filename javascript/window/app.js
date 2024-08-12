/*TODO: Window: interface used to talk to the web browser.
        The DOM is a property of the window
*/

// console.log(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.scrollX);
// console.log(window.screenY);
// console.log(window.location.href);
// window.location.href = "https://google.com"; //setting the location google.com
// console.log(window.location.pathname);

// const button = document.getElementById("butt");
// button.addEventListener("click", () => {
//     // window.open("https://twitter.com/Dean8IX");
//     // window.close();
//    // window.print();
// })


// window.alert("Hello");
// let result = window.confirm("Are you sure?")
// console.log(result); 

let age = window.prompt("Enter your age");

if (age < 18) {
    window.alert("You must be above 18");
   let confirm = window.confirm("Are you sure you wanna continue though?");
   if (confirm) {
       window.alert("YOU ARE IN!");
   } else {
       window.close();
   }
}
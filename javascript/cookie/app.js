/*TODO: Cookie: is a small text file stored o your computer
                used to remember information about the user
                saved in a name=value pairs
*/

// let isCookieEnabled = navigator.cookieEnabled; //to check if cookie is enabled
// console.log(isCookieEnabled);

//document.cookie = "firstName=James; expires = Sunday, 1 January, 2024 12:00:00 UTC; path = /" //to set a cookie
//document.cookie = "lastName=Dean; expires = Sunday, 1 January, 2024 12:00:00 UTC; path = /" //to set a cookie

// createCookie("firstName", "Michael", 5);
// createCookie("lastName", "Jordan", 5);
// createCookie("phoneNumber", "08095729090", 5);
// deleteCookie("firstName");
// deleteCookie("lastName");
// console.log(document.cookie);
//-------------------------------------------------------------------------------------
const first = document.getElementById("first");
const last = document.getElementById("last");
const button = document.getElementById("butt");
const cookie = document.getElementById("cookie");

button.addEventListener("click", ()=> {
    createCookie("firstName", first.value, 12);
    createCookie("lastName",last.value, 12);
});
cookie.addEventListener("click", ()=> {
    document.getElementById("firstName").textContent = `First Name: ${getCookieValue("firstName")}`;
    document.getElementById("lastName").textContent  = `Last Name: ${getCookieValue("lastName")}`;
})


console.log(getCookieValue("firstName"));
function createCookie(name, value, expiryDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    let expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
    createCookie(name, null, null);
}

function getCookieValue(cookieName) {
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecoded.split("; ");
    let result = null;

    cookieArray.forEach(element => {
        if (element.indexOf(cookieName) === 0) {
            result = element.substring(cookieName.length + 1);
        }
    })
    return result;
}
const button = document.querySelector("#butt");
const animeObject = document.querySelector("#myDiv");

button.addEventListener("click", animate);

function animate() {
    let timerId = null;
    let degree = 0;
    let x = 0;
    let y = 0;
    let scaleX = 1; //100%
    let scaleY = 1; //100%

    timerId = setInterval(shrink, 5);

    function shrink() {
        if (scaleX <= 0.1 || scaleY <= 0.1) {
            clearInterval(timerId);
        } else {
            scaleX -= 0.01;
            scaleY -= 0.01;
            animeObject.style.transform = `scale(${scaleX}, ${scaleY})`;
        }
    }

    function increaseAll() {
        if (scaleX >= 2 || scaleY >= 2) {
            clearInterval(timerId);
        } else {
            scaleX += 0.01;
            scaleY += 0.01;
            animeObject.style.transform = `scale(${scaleX}, ${scaleY})`;
        }
    }

    function increaseX() {
        if (scaleX >= 2) {
            clearInterval(timerId);
        } else {
            scaleX += 0.01;
            animeObject.style.transform = `scale(${scaleX}, ${scaleY})`;
        }
    }

    function increaseY() {
        if (scaleY >= 2) {
            clearInterval(timerId);
        } else {
            scaleY += 0.01;
            animeObject.style.transform = `scale(${scaleX}, ${scaleY})`;
        }
    }

    function diagonallyRotate() {
        if (y >= 750 || x >= 750) {
            clearInterval(timerId);
        } else {
            degree += 10;
            x += 1;
            y += 1;
            animeObject.style.top = y + "px";
            animeObject.style.left = x + "px";
            animeObject.style.transform = `rotateZ(${degree}deg)`;//"rotateX(" + degree + "deg)";
        }
    }

    function rotateX() {
        if (degree >= 360) {
            clearInterval(timerId);
        } else {
            degree += 1;
            animeObject.style.transform = `rotateX(${degree}deg)`;//"rotateX(" + degree + "deg)";
        }
    }

    function rotateY() {
        if (degree >= 360) {
            clearInterval(timerId);
        } else {
            degree += 1;
            animeObject.style.transform = `rotateY(${degree}deg)`;//"rotateX(" + degree + "deg)";
        }
    }

    function rotateZ() {
        if (degree >= 360) {
            clearInterval(timerId);
        } else {
            degree += 1;
            animeObject.style.transform = `rotateZ(${degree}deg)`;//"rotateX(" + degree + "deg)";
        }
    }

    function goRight() {
        if (x >= 300) {
            clearInterval(timerId);
        } else {
            x += 1;
            animeObject.style.left = x + "px";
        }
    }

    function goDown() {
        if (y >= 300) {
            clearInterval(timerId);
        } else {
            y += 1;
            animeObject.style.top = y + "px";
        }
    }

    function goDiagonal() {
        if (y >= 300 || x >= 300) {
            clearInterval(timerId);
        } else {
            x += 1;
            y += 1;
            animeObject.style.top = y + "px";
            animeObject.style.left = x + "px";
        }
    }
}
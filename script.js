var bars = document.getElementById("bars")
var nav = document.getElementById("myTopnav");


function miniNav() {
    if (nav.className === "navigation") {
        nav.className += " responsive";
    } else {
        nav.className = "navigation";
    }
}

bars.addEventListener('click', () => {
    miniNav();
    /*setTimeout(
        function () {
            nav.className = "navigation";
        }, 7000);*/
}, false);

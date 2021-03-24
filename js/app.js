const nav = document.getElementById("myNav");
const hamburger = document.querySelector("#myNav .icon");
const hamburgerIcon = hamburger.querySelector("i");

hamburger.addEventListener("click", myFunction);

function myFunction(e) {
    e.preventDefault();
    if (hamburgerIcon.classList.contains("fa-bars")) {
        hamburgerIcon.classList.remove("fa-bars")
        hamburgerIcon.classList.add("fa-times")
    } else if (hamburgerIcon.classList.contains("fa-times")) {
        hamburgerIcon.classList.remove("fa-times")
        hamburgerIcon.classList.add("fa-bars")
    }
    nav.classList.toggle("responsive");
}

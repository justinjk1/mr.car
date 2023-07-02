let bar = document.querySelector("#bars")
let nav_link = document.querySelector(".nav-link");

bar.addEventListener ("click", function () {
 nav_link.classList.toggle("show")
});
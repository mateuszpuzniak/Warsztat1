const btn = document.querySelector(".page-burger");
const nav = document.querySelector(".page-nav");

btn.onclick = function() {
    btn.classList.toggle("is-clicked");
    nav.classList.toggle("is-show");
}
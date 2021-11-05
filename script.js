
let btnMenu = document.getElementById("btnMenu")
let nav = document.getElementById("nav")

btnMenu.addEventListener("click",() => {
    nav.classList.toggle("active");
    btnMenu.classList.toggle("active");
});
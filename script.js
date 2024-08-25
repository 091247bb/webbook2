let navbar = document.querySelector(".header .navber")
let bars = document.querySelector(".header .flex .icons .fa-bars")
let times = document.querySelector(".header .flex .icons .fa-xmark")

bars.addEventListener("click",() =>{
    navbar.classList.add("show");
    times.classList.add("show");
    bars.classList.add("show");
});

times.addEventListener("click",() =>{
    navbar.classList.remove("show");
    times.classList.remove("show");
    bars.classList.remove("show");
});
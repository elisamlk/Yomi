let menu = document.querySelector("#nav-icon1");
let nav = document.querySelector("nav");
console.log(menu);
menu.addEventListener("click", function () {
  menu.classList.toggle("open");
  nav.classList.toggle("active");
});

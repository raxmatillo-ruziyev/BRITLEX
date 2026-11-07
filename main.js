const menu = document.querySelector(".modal");
const openBtn = document.querySelector(".header__btn");
const closeBtn = document.querySelector(".modal__btn");

openBtn.addEventListener("click", () => menu.classList.add("modal--open"));
closeBtn.addEventListener("click", () => menu.classList.remove("modal--open"));
menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => menu.classList.remove("modal--open"))
);
const icons = document.querySelectorAll('[data-holder="nav-icon"]');
const nav = document.querySelector('nav');

document.querySelector('[data-holder="nav-icons"]').addEventListener("click", showNav = () => {
    icons.forEach(item => {
        item.classList.toggle("--show")
    })
    nav.classList.toggle("--show")
})
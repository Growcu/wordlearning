const elements = [...document.querySelectorAll("[data-holder='dark-mode']")];
const addClass = function () {
    elements.forEach(item => {
        item.classList.toggle("--dark-mode")
    })
}

document.querySelector(".dark-mode").addEventListener("click", addClass);
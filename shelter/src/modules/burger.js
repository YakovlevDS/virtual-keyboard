const menu = document.querySelector('.header__menu')

const toggleMenu = () => {
    menu.classList.toggle('burger-active')
}

burger.addEventListener("click", () => toggleMenu);
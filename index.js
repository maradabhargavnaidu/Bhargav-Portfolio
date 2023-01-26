const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.js-list');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('toggle');
    list.classList.toggle('display-desktop');
})
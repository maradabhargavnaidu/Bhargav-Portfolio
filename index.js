const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('#list');

hamburger.addEventListener('click', () => {
    list.classList.toggle('toggle');
    list.classList.toggle('toggle');
});
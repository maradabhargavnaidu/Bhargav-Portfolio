const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.toggle');

hamburger.addEventListener('click', () => {
    list.classList.toggle('block');
    list.classList.toggle('toggle');
});
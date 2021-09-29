const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.querySelector('.header');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

const courseToggle = document.querySelector('.education-one__button');
const returnButton = document.querySelector('.courses-return__button');

courseToggle.addEventListener('click', () => {
    document.body.classList.toggle('course-open');
    header.style.display = "none";
});

returnButton.addEventListener('click', () => {
    document.body.classList.remove('course-open');
    header.style.display = "flex";
});

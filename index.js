const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Initial setup
slides[currentSlide].classList.add('active');

// Change slide every 5 seconds
setInterval(showNextSlide, 4000);

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.header__menu-btn');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.header__nav');

    menuBtn.addEventListener('click', () => {
        header.classList.toggle('expanded');
        nav.classList.toggle('show');
        // if (nav.style.display === 'block') {
        //     nav.style.display = 'none';
        // } else {
        //     nav.style.display = 'block';
        // }
    });
});

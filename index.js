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

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.details-list-item');
    let currentIndex = 0;

    function showNextItem() {
        // Hide all items
        listItems.forEach(item => {
            item.classList.remove('visible');
        });

        // Show the current item
        listItems[currentIndex].classList.add('visible');

        // Move to the next item
        currentIndex = (currentIndex + 1) % listItems.length;

        // Set the interval for the next item
        setTimeout(showNextItem, 4000); // Adjust timing as needed
    }

    // Start the animation
    showNextItem();
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const scrollHeight = window.scrollY;

    if (scrollHeight > window.innerHeight * 0.5) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

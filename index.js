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

// Function to increment the counters
function incrementCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = +counter.innerText; // Convert the text content to number
        counter.innerText = '0'; // Start the counter at 0

        const updateCounter = () => {
            const currentValue = +counter.innerText; // Get the current value
            const increment = target / 100; // Divide the target value to set an increment speed

            if (currentValue < target) {
                // If the current value is less than the target
                const newValue = Math.ceil(currentValue + increment); // Increase by the increment
                counter.innerText = newValue; // Update the display
                setTimeout(updateCounter, 10); // Recursive call with a delay of 10ms
            } else {
                // Ensure that the counter matches the target exactly
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

// Function to check if the section is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && 
        rect.bottom > 0 // Check if any part of the element is visible
    );
}

// Event listener to trigger when scrolling
let countersTriggered = false; // To prevent multiple triggers

window.addEventListener('scroll', function () {
    const achievementSection = document.querySelector('.achievment-area');

    if (achievementSection) {
        // console.log('Scroll event detected.');
        // console.log('In viewport: ', isInViewport(achievementSection));

        if (isInViewport(achievementSection) && !countersTriggered) {
            // console.log('Starting counter increment...');
            incrementCounters();
            countersTriggered = true; // Prevent multiple executions
        }
    }
});

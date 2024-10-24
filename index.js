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

// Event data (can be imported from a separate file)
const eventsData = [
    {
        id: 1,
        title: 'ICACS 2025',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien at libero ultricies lacinia',
        date: 'October 25th',
        imageSrc: './resources/cspit/event_1.jpg'
    },
    {
        id: 2,
        title: 'TEDx CHARUSAT',
        description: 'Description of Event 2',
        date: 'September 24th',
        imageSrc: './resources/cspit/event_2.jpg'
    },
    {
        id: 3,
        title: 'Ganesh Chaturthi Celebration',
        description: 'Description of Event 3',
        date: '10th December 2024',
        imageSrc: './resources/cspit/event_3.jpg'
    },
    {
        id: 4,
        title: 'Event 4',
        description: 'Description of Event 4',
        date: '2024-12-20',
        imageSrc: 'path/to/image4.jpg'
    },
    {
        id: 5,
        title: 'Event 5',
        description: 'Description of Event 5',
        date: '2025-01-15',
        imageSrc: 'path/to/image5.jpg'
    }
];

function createEventCard(event) {
    const card = document.createElement('div');
    card.classList.add('event-card');

    // Image element
    const image = document.createElement('img');
    image.classList.add('event-card-image');
    image.src = event.imageSrc;
    image.alt = event.title;
    image.loading = 'lazy';

    // Info container
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('event-card-info');

    // Title element
    const title = document.createElement('h2');
    title.classList.add('event-card-title');
    title.textContent = event.title;

    // Description element
    const description = document.createElement('p');
    description.classList.add('event-card-description');
    description.textContent = event.description;

    // Date element
    const date = document.createElement('p');
    date.classList.add('event-card-date');
    date.textContent = `${event.date}`;

    // Append elements to the info container
    infoContainer.appendChild(date);
    infoContainer.appendChild(title);
    infoContainer.appendChild(description);

    // Append the image and info container to the card
    card.appendChild(image);
    card.appendChild(infoContainer);

    return card;
}

// Function to render the initial 3 event cards
function renderInitialCards() {
    const container = document.querySelector('.events-cards-container');
    container.innerHTML = '';  // Clear existing cards

    const initialEvents = eventsData.slice(0, 3);
    initialEvents.forEach(event => {
        const card = createEventCard(event);
        container.appendChild(card);
    });
}

// Function to render all event cards in the dialog
function renderAllCards() {
    const dialogContainer = document.querySelector('.events-dialog-cards-container');
    dialogContainer.innerHTML = '';  // Clear existing cards

    eventsData.forEach(event => {
        const card = createEventCard(event);
        dialogContainer.appendChild(card);
    });
}

// Function to handle "More" button click
function showAllCards() {
    const dialog = document.querySelector('.events-dialog');
    renderAllCards();  // Render all cards in the dialog
    dialog.showModal();  // Open the dialog
}

// Function to handle dialog close
function closeDialog() {
    const dialog = document.querySelector('.events-dialog');
    dialog.close();  // Close the dialog
}

// Initialize the component and set event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderInitialCards();  // Render initial cards

    document.querySelector('.events-more-btn').addEventListener('click', showAllCards);
    document.querySelector('.events-dialog-close-btn').addEventListener('click', closeDialog);
});

// Testimonial data
const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        designation: 'Software Engineer',
        testimonial: 'This service has been a game changer for me. The team is professional and the results are outstanding.',
        imageSrc: './resources/Testimonials/image-1.png'
    },
    {
        id: 2,
        name: 'Jane Smith',
        designation: 'Product Manager',
        testimonial: 'I have never been so impressed with a company’s dedication to customer success. Highly recommended!',
        imageSrc: './resources/Testimonials/image-2.png'
    },
    {
        id: 3,
        name: 'Michael Lee',
        designation: 'UX Designer',
        testimonial: 'Their attention to detail and passion for creating great products is truly remarkable.',
        imageSrc: './resources/Testimonials/image-3.webp'
    },
    {
        id: 4,
        name: 'Emily Davis',
        designation: 'Marketing Specialist',
        testimonial: 'The team provided us with a top-notch solution. The process was smooth and the results exceeded expectations.',
        imageSrc: './resources/Testimonials/image-4.webp'
    },
    {
        id: 5,
        name: 'David Clark',
        designation: 'CEO, Startup',
        testimonial: 'Amazing results. Their work ethic and quality of output are unmatched.',
        imageSrc: './resources/Testimonials/image-5.webp'
    },
    {
        id: 6,
        name: 'Sophia White',
        designation: 'Creative Director',
        testimonial: 'We have been very pleased with the outcomes. The communication and service are simply brilliant.',
        imageSrc: './resources/Testimonials/image-6.jpeg'
    }
];

// Function to create a testimonial card
function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.classList.add('testimonial-card');

    // Image element
    const image = document.createElement('img');
    image.classList.add('testimonial-card-image');
    image.src = testimonial.imageSrc;
    image.alt = testimonial.name;
    image.loading = 'lazy';

    // Info wrapper
    const infoWrapper = document.createElement('div');
    infoWrapper.classList.add('testimonial-card-info');

    // Name element
    const name = document.createElement('h3');
    name.classList.add('testimonial-card-name');
    name.textContent = testimonial.name;

    // Designation element
    const designation = document.createElement('p');
    designation.classList.add('testimonial-card-designation');
    designation.textContent = testimonial.designation;

    // Testimonial paragraph
    const paragraph = document.createElement('p');
    paragraph.classList.add('testimonial-card-paragraph');
    paragraph.textContent = testimonial.testimonial;

    // Append elements to the info wrapper
    infoWrapper.appendChild(name);
    infoWrapper.appendChild(designation);
    infoWrapper.appendChild(paragraph);

    // Append the image and info wrapper to the card
    card.appendChild(image);
    card.appendChild(infoWrapper);

    return card;
}

// Function to render testimonial cards
function renderTestimonials() {
    const container = document.querySelector('.testimonials-container');
    container.innerHTML = '';  // Clear existing content

    testimonials.forEach(testimonial => {
        const card = createTestimonialCard(testimonial);
        container.appendChild(card);
    });
}

// Initialize the testimonials section
document.addEventListener('DOMContentLoaded', renderTestimonials);

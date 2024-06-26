const modeBtn = document.getElementById('mode-button');
const dropdown = document.getElementById('mode-dropdown');

const modeToggle = () => {
    dropdown.classList.toggle('visible');
};

modeBtn.addEventListener('click', modeToggle);

const hoverBtn = document.getElementById('mode-button2');
const hoverDropdown = document.getElementById('mode-dropdown2');

const hoverBtnFunction = () => {
    hoverDropdown.classList.add('hover');
};

const hoverOutFunction = () => {
    hoverDropdown.classList.remove('hover');
};

hoverBtn.addEventListener('mouseover', hoverBtnFunction);
hoverBtn.addEventListener('mouseout', hoverOutFunction);


// Creating the Carousel  

const carouselImages = [
    'images/AS 1.webp',
    'images/AS 2.webp',
    'images/AS 3.webp'
];

let currentIndex = 0;

// Function to initialize the carousel with images
function initializeCarousel() {
    const carouselCard = document.getElementById('carousel-card');

    // Loop through the carouselImages array and create img elements
    carouselImages.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('carousel-image');
        if (index !== 0) {
            img.style.display = 'none';
        }
        carouselCard.appendChild(img);
    });

    // Initialize navigation circles
    const paginationContainer = document.querySelector('.carousel-pagination');
    carouselImages.forEach((_, index) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        if (index === 0) {
            circle.classList.add('active');
        }
        circle.addEventListener('click', () => navigateTo(index));
        paginationContainer.appendChild(circle);
    });

    // Set up navigation arrows
    document.querySelector('.carousel-arrow.left').addEventListener('click', () => navigateTo(currentIndex - 1));
    document.querySelector('.carousel-arrow.right').addEventListener('click', () => navigateTo(currentIndex + 1));
}

function navigateTo(index) {
    const images = document.querySelectorAll('.carousel-image');
    const circles = document.querySelectorAll('.circle');

    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }

    images[currentIndex].style.display = 'none';
    circles[currentIndex].classList.remove('active');

    currentIndex = index;

    images[currentIndex].style.display = 'block';
    circles[currentIndex].classList.add('active');
}

// Call the function to initialize the carousel
initializeCarousel();



// extra practice

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
// summ all numbers in at least two different ways.
numbers.forEach(value => sum += value);

console.log(sum);



const words = ['hello', 'this', 'job', 'sucks'];

const titleCasedWords = words.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});

const titleCaseString = titleCasedWords.join(' ');

console.log(titleCaseString); // Output: "Hello This Job Sucks"



const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// create two arrays one with even numbers and one with odd numbers
let evenNumbers = [];
let oddNumbers = [];

allNums.forEach((num) => {
    if (num %2 === 0) {
        evenNumbers.push(num);
    } else {
        oddNumbers.push(num);
    }
});

console.log(evenNumbers, oddNumbers)
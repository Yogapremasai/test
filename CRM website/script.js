const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
//slider
// JavaScript
let slideIndex = 0;

function showSlides(n) {
    const slides = document.querySelectorAll('.slider-container img');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => (slide.style.display = 'none'));
    slides[slideIndex].style.display = 'block';
}

function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Initial display
showSlides(slideIndex);

// Button event listeners
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

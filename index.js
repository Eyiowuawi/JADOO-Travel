// Code to view the side - bar when the hamburger is toggled
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const sideBar = document.getElementsByClassName('side-bar')[0]
toggleButton.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})

//the Code that controls the carousel under the testimonial section
// const track = document.querySelector('testimonial-flexright');
// const slides = Array.from(track.children);
// console.log(slides)

// const slides = document.querySelectorAll('.slide');
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');
// const slidedots = document.querySelector('.dots')
// const auto = true; // Auto scroll
// const intervalTime = 4000;
// let slideInterval;

// const nextSlide = () => {
//     // Get current class
//     const current = document.querySelector('.current');
//     // Remove current class
//     current.classList.remove('current');
//     // Check for next slide
//     if (current.nextElementSibling) {
//         // Add current to next sibling
//         current.nextElementSibling.classList.add('current');
//     } else {
//         // Add current to start
//         slides[0].classList.add('current');
//     }
//     setTimeout(() => current.classList.remove('current'));
// };

// const prevSlide = () => {
//     // Get current class
//     const current = document.querySelector('.current');
//     // Remove current class
//     current.classList.remove('current');
//     // Check for prev slide
//     if (current.previousElementSibling) {
//         // Add current to prev sibling
//         current.previousElementSibling.classList.add('current');
//     } else {
//         // Add current to last
//         slides[slides.length - 1].classList.add('current');
//     }
//     setTimeout(() => current.classList.remove('current'));
// };
// // Button events
// next.addEventListener('click', e => {
//     nextSlide();
//     if (auto) {
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextSlide, intervalTime);
//     }
// });

// prev.addEventListener('click', e => {
//     prevSlide();
//     if (auto) {
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextSlide, intervalTime);
//     }
// });
// slidedots.addEventListener('click', e => {
//     prevSlide();
//     if (auto) {
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextSlide, intervalTime);
//     }
// });

// // Auto slide
// if (auto) {
//     // Run next slide at interval time
//     slideInterval = setInterval(nextSlide, intervalTime);
// }
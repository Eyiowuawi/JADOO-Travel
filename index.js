//Code to view the side-bar when the hamburger is toggled
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const sideBar = document.getElementsByClassName('side-bar')[0]
toggleButton.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})

//the Code that controls the carousel under the testimonial section
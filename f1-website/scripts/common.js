const toggleButton = document.querySelector(".toggle-button");
const navBar = document.querySelector(".left-links");

toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
});
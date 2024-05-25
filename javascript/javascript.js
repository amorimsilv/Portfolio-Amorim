const hamburgerButton = document.getElementById('hamburgerButton');
const close = document.getElementById('closeButton');

const mobileMenu = document.getElementById('mobileMenu');

hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
})

closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
})
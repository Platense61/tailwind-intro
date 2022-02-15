const mobile = document.querySelector(".mobile-menu"); //the elements to display when mobile mode activated
const btn = document.querySelector(".hamburger"); //hamburger button
btn.addEventListener("click", mobileMenu);

function mobileMenu() {
    mobile.classList.toggle("hidden");
}

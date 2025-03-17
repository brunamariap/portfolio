const navbar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
	navbar.classList.toggle("active");
});

// Getting elements from DOM
const hamburgerEl = document.querySelector('.hamburger');
const navMenuEl = document.querySelector('.nav-menu');
const navLinksEl = document.querySelectorAll('.nav-link');

// Adding a click event for the hamburger and navMenu elements by toggling classnames.
hamburgerEl.addEventListener('click', () => {
	hamburgerEl.classList.toggle('active');
	navMenuEl.classList.toggle('active');
});

// When clicking on link in nav we remove the active classname.
// But only when the navMenuEl is visible.
navLinksEl.forEach((link) =>
	link.addEventListener('click', () => {
		hamburgerEl.classList.remove('active');
		navMenuEl.classList.remove('active');
	})
);

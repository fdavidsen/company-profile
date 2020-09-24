// Sidenav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
	indicators: false,
	height: 400,
	duration: 500,
	interval: 3000
});

// Parallax - Clients
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// Material Box - Portfolio
const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);

// Scrollspy
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {
	scrollOffset: 50
});
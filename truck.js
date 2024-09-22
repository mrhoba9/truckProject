document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.querySelector(
		'[data-collapse-toggle="navbar-default"]'
	);
	const menu = document.getElementById("navbar-default");

	menuButton.addEventListener("click", function () {
		menu.classList.toggle("hidden");
	});
});
/*arrow starts */
const arrow_btn = document.getElementById("arrow-up-btn");
function arrow_func_scroll() {
	if (window.scrollY >= 940) {
		arrow_btn.style.opacity = "1";
		arrow_btn.style.zIndex = "20";
	} else {
		arrow_btn.style.opacity = "0";
		arrow_btn.style.zIndex = "-1";
	}
}
arrow_func_scroll();
window.addEventListener("scroll", arrow_func_scroll);
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
window.onload = () => {
	scrollToTop();
};
arrow_btn.addEventListener("click", scrollToTop);
/*arrow ends */
/*first sec text starts */
document.addEventListener("scroll", function () {
	// Get the scroll position
	const scrollX = window.scrollY;

	// Select the text elements
	const textLeft = document.getElementById("text-left");
	const textRight = document.getElementById("text-right");

	// Update the transform property based on scroll position

	textLeft.style.transform = `translateX(${scrollX * 2}px)`;
	textRight.style.transform = `translateX(-${scrollX * 2}px)`;
	if (window.innerWidth <= 1100) {
		textLeft.style.transform = `translateX(${scrollX * 1.5}px)`;
		textRight.style.transform = `translateX(-${scrollX * 1.5}px)`;
	}
});
/*first sec text ends */
document.addEventListener("DOMContentLoaded", function () {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	const targets = document.querySelectorAll(".fade-in-left");
	targets.forEach((target) => observer.observe(target));

	document.getElementById("footer-footer").innerHTML += `
		<a href="https://www.auro-eg.com" class="flex items-center justify-center text-white text-center">
			<img src="logo-white.png" class="h-10 w-16 mr-2" alt="">&copy; auro-eg.com
		</a>
	`;
});
/*parts sec starts */
document.querySelectorAll(".accordion").forEach((button) => {
	button.addEventListener("click", function () {
		const panel = this.nextElementSibling;
		panel.style.display = panel.style.display === "block" ? "none" : "block";

		const icon = this.querySelector(".icon-arrow-parts");
		icon.style.transform =
			panel.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)";
	});
});
/*parts sec ends */

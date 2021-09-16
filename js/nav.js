function santasNav() {
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll(".nav__menu a");

	sections.forEach(section => {
		section.addEventListener("mouseenter", function() {
			const id = this.getAttribute("id");
			const navActive = document.querySelector(`a[href="#${id}"]`);
			navLinks.forEach(link => link.classList.remove("nav__active"));
			navActive.classList.add("nav__active");
		});
	});
}

santasNav();





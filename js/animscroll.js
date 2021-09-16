const sr = ScrollReveal({
	duration: 1000
});

sr.reveal('.banner__img', {
	origin:'top',
	scale: 0.95,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	delay: 300,
	reset: true
});

sr.reveal('.banner__title__desc', {
	origin:'bottom',
	easing: 'ease',
	delay: 600,
	reset: true
});

sr.reveal('.items__card', {
	origin:'bottom',
	easing: 'ease',
	delay: 500,
	reset: true
}, 100);

sr.reveal('.clients__item__card', {
	origin:'bottom',
	easing: 'ease',
	delay: 500,
	reset: true
}, 100);

sr.reveal('.hire__item', {
	origin:'bottom',
	easing: 'ease',
	delay: 500,
	reset: true
}, 100);

sr.reveal('.portfolio__gallery', {
	origin:'bottom',
	easing: 'ease',
	delay: 500,
	reset: true
});

sr.reveal('.video', {
	origin:'bottom',
	easing: 'ease',
	delay: 500,
	reset: true
});
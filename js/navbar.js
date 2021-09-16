// const buttons = document.querySelectorAll('.button');

// buttons.forEach(button => {
// 	button.addEventListener('click', rippleEffect);
// });

// function rippleEffect(event) {

// 	let circle = document.createElement('div');
// 	this.appendChild(circle);
// 	circle.classList.add('ripple');

// 	circle.style.top = event.clientY - this.offsetTop + 'rem';
// 	circle.style.left = event.clientX - this.offsetLeft + 'rem';
// 	circle.style.transform = 'translate(-50%, -50%)';
// }



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

	var currentScrollpos = window.pageYOffset;
	if(prevScrollpos > currentScrollpos) {
		document.getElementById("navbar").style.top = "3%";

	} else {
		document.getElementById("navbar").style.top = "-20%";
	}

	prevScrollpos = currentScrollpos;
}
$(document).ready(function(){

	let $btns = $('.portfolio .portfolio__nav button');

	$btns.click(function(e){

		$('.portfolio .portfolio__nav button').removeClass('active');
		e.target.classList.add('active');

		let selector = $(e.target).attr('data-filter');
		$('.portfolio .wall-column').isotope({
			filter:selector
		});

		return false;
	})
});





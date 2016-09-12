jQuery(function ($) {

	$('.accordion').height(450).shadeAccordion('.item', 450);
	$('.grid').isotope({
	  layoutMode: 'fitRows',
	  itemSelector: '.imgcat'
	});
});
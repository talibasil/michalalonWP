jQuery(function ($) {

<<<<<<< HEAD
	$('.accordion').height(450).shadeAccordion('.item', 450);
	$('.grid').isotope({
	  layoutMode: 'fitRows',
	  itemSelector: '.imgcat'
	});
=======
	if ($('.accordion').length) { //if we have slider

		var heightforestscreen = $(window).height() - $('header').height() - $('footer').height();

		var counter = 0,
			end = $('.accordion').find('img').length;
		$('.accordion').find('img').load(function() { //fires after all images loads
		    counter += 1;
		    counter === end && $('.accordion').height(heightforestscreen).shadeAccordion('.item', heightforestscreen);
		}).each(function() {
		  this.complete && $(this).load();        
		});		
	}

	if ($('.grid').length) { //if we have slider
		var counter = 0,
			end = $('.grid').find('img').length;
		$('.grid').find('img').load(function() { //fires after all images loads
		    counter += 1;
		    counter === end && $('.grid').isotope({layoutMode: 'fitRows', itemSelector: '.imgcat'});
		}).each(function() {
		  this.complete && $(this).load();        
		});		
	}
<<<<<<< HEAD
>>>>>>> parent of 72322e3... home page slider- photo size auto
=======
>>>>>>> parent of 72322e3... home page slider- photo size auto
});
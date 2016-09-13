jQuery(function ($) {

	if ($('.products').length) { //if we have slider
		var counter = 0,
			end = $('.products').find('img').length;
		$('.products').find('img').load(function() { //fires after all images loads
		    counter += 1;
		    counter === end && $('.products').height(450).shadeAccordion('li', 450);
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
});
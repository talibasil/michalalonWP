jQuery(function ($) {

 	if(window.innerWidth >= 800 && window.innerHeight >= 600 && $('.accordion').length) { //only for desktops?

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

	} else { // only mobile

		if ($('.accordion').length) { //if we have slider
			
			$('.accordion').find('.item').css('background-color', 'black').find('img').css('opacity', '0.4');


		}

	}

	//category page for all images
	if ($('.grid').length) { 
		var counter = 0,
			end = $('.grid').find('img').length;
		$('.grid').find('img').load(function() { //fires after all images loads
		    counter += 1;
		    counter === end && $('.grid').isotope({layoutMode: 'fitRows', itemSelector: '.imgcat'});
		}).each(function() {
		  this.complete && $(this).load();        
		});		
	}


	if ($('body').hasClass('home')) {
		var heightforestscreen = $(window).height() - $('header').height();
		$('.carousel .item').height(heightforestscreen);
	}

});
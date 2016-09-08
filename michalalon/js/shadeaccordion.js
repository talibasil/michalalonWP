jQuery(function ($) {
	$.fn.shadeAccordion = function( elmwrap, sliderH){

		var	$this = $(this), 						//get the slider countiner
			SlideR = $this, 
			SliderWidth = SlideR.innerWidth(), 	// slider should inherit parent witdth
			thumbA = SlideR.find('a'),				// images should wrap with a tag
			thumbMOunt = thumbA.length,				// count the number of images
			ImgHref = thumbA.attr('href'),			// images href
			thumbImg = thumbA.find('img');			// find  acctual imgaes


		var imgaesWidth = 0;
			thumbImg.each(function(index, el) {
				imgaesWidth += $(el).outerWidth(true);
			});
		var margineach =  SliderWidth /  (100+imgaesWidth)   ;

		//some CSS Settigns
		SlideR.find(elmwrap).css({
			'transition': 'width .2s ease-in',
			'height': sliderH,
			'overflow' : 'hidden',
			'position': 'relative'
		}).find('img').css({
			height: sliderH,
			width: 'auto',
			'position' : 'relative',
			'max-width' : 'none'
		});;

	   	$.fn.HoverAnimation = function(SliderWidth){
   		var	$this = $(this), 						//get the specific hoverd container
   			imgWid = $this.data('orginalwidht'), 	//actual image width for this cont
   			sliderWidthAfterOpen = SliderWidth - imgWid - 1,
			thumbImgSibDiv = $this.siblings(elmwrap);


		var sibImgaesWidth = 0;
			thumbImgSibDiv.each(function(index, el) {
				sibImgaesWidth += $(el).width();
			});
		var margineachOpend = sliderWidthAfterOpen / sibImgaesWidth;
			

			$this.addClass('active').width(imgWid);

	   		thumbImgSibDiv.addClass('inactive').each(function(){
	   			var thisW = $(this).width();
	   			$(this).width((thisW * margineachOpend) - 10 ).css('opacity', '0.4');
	   		});
	
	   	};//End of mouse over
	    	
	   	$.fn.LeaveAnimation = function(SliderWidth , margineach) {
	   		var $this = $(this),
				imgWid = $this.data('editedwidth');
	       	
			$this.removeClass('active').width(imgWid);
	       	
	       	SlideR.find(elmwrap).not('.active').removeClass('inactive').each(function(){
	       		$(this).width( $(this).data('editedwidth') ).css('opacity', 1);
	    	}); //End of Each change Margin
	    
	    };//End of mouseleave


			//adjust new margin
		// $this.find('a:first-child').find("div").css('margin-right' ,0);
		// $this.find("a:last-of-type div").css('margin-left' , 0);	


		 // adjust new width and declare animation when hover
		SlideR.find(elmwrap).each(function(idx,el){
			var imgW = $(el).find('img').width();

			$(el).attr('data-orginalwidht', imgW).attr('data-editedwidth', (imgW * margineach) - 1).find('img').css({
				margin: '0',
				padding: '0'
			});
			$(el).width((imgW * margineach)); //change images width so they will super fit to the slider
			$(el).css({'margin': 0, 'clear': 'none'}); //change images width so they will super fit to the slider
		})
		.mouseover(function(){$(this).HoverAnimation(SliderWidth , margineach)})
		.mouseleave(function(){$(this).LeaveAnimation(SliderWidth , margineach)});

	}

});
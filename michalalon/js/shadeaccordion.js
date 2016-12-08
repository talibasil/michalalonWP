jQuery(function ($) {
	$.fn.shadeAccordion = function( elmwrap, sliderH){

		var	$this = $(this), 						//get the slider countiner
			SlideR = $this, 
			SliderWidth = SlideR.width(), 	// slider should inherit parent witdth
			thumbA = SlideR.find('a'),				// images should wrap with a tag
			thumbImg = thumbA.find('img'),			// find  acctual imgaes
			thumbMOunt = thumbImg.length;				// count the number of images

		
		//some CSS Settigns
		SlideR.find(elmwrap).css({
			'transition': 'width .2s ease-in',
			'height': sliderH,
			'overflow' : 'hidden',
		}).find('img').css({
			height: sliderH,
			'width': 'auto',
			'position' : 'relative',
			'max-width' : 'none'
		});

		var imgaesWidth = 0;
			thumbImg.each(function(index, el) {
				imgaesWidth += $(el).width();
			});


		var margineach =  SliderWidth /  imgaesWidth ;
	   	
	   	$.fn.HoverAnimation = function(SliderWidth){
	   		var	$this = $(this), 						//get the specific hoverd container
	   			imgWid = $this.data('orginalwidht'), 	//actual image width for this cont
	   			sliderWidthAfterOpen = SliderWidth - imgWid,
				thumbImgSibDiv = $this.siblings(elmwrap);


			var sibImgaesWidth = 0;
				thumbImgSibDiv.each(function(index, el) {
					sibImgaesWidth += $(el).width();
				});
			var margineachOpend = sliderWidthAfterOpen / sibImgaesWidth;
				

				$this.addClass('active').width(imgWid).find('img').css('opacity', '1');

		   		thumbImgSibDiv.addClass('inactive').each(function(){
		   			var thisW = $(this).width();
		   			$(this).width( thisW * margineachOpend );
		   		}).find('img').css('opacity', '0.4');
	
	   	};//End of mouse over
	    	
	   	$.fn.LeaveAnimation = function(SliderWidth ) {
	   		var $this = $(this),
				imgWid = $this.data('editedwidth');
	       	
			$this.removeClass('active').width(imgWid);
	       	SlideR.find(elmwrap).not('.active').removeClass('inactive').each(function(){
	       		$(this).width( $(this).data('editedwidth') );
	    	}).find('img').css('opacity', '0.4'); //End of Each change Margin
	    
	    };//End of mouseleave

	    if (SliderWidth < imgaesWidth) {  // only if all images is bigger than slider width
			 // adjust new width and declare animation when hover
			SlideR.find(elmwrap).each(function(idx,el){
				var imgW = $(el).find('img').width();

				$(el).width( imgW * margineach).find('img').css('opacity', '0.4'); //change images width so they will super fit to the slider
				$(el).attr('data-orginalwidht', imgW).attr('data-editedwidth', imgW * margineach).find('img');
				$(el).css({'margin': 0, 'clear': 'none','padding':0}); //change images width so they will super fit to the slider
			})
			.mouseover(function(){$(this).HoverAnimation(SliderWidth)})
			.mouseleave(function(){$(this).LeaveAnimation(SliderWidth)});
			
		}
	}

});

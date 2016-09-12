jQuery(function ($) {
	$.fn.shadeAccordion = function( elmwrap, sliderH){

		var	$this = $(this), 						//get the slider countiner
			SlideR = $this, 
			SliderWidth = SlideR.width(), 	// slider should inherit parent witdth
			thumbA = SlideR.find('a'),				// images should wrap with a tag
			thumbMOunt = thumbA.length,				// count the number of images
			thumbImg = thumbA.find('img');			// find  acctual imgaes

		var imgaesWidth = 0;
			thumbImg.each(function(index, el) {
				imgaesWidth += $(el).width();
			});
			console.log(imgaesWidth);
		var margineach =  SliderWidth /  imgaesWidth ;
			console.log(margineach);

		//some CSS Settigns
		SlideR.find(elmwrap).css({
			'transition': 'width .2s ease-in',
			'height': sliderH,
			'overflow' : 'hidden',
			'position': 'static'
		}).find('img').css({
			height: sliderH,
			width: 'auto',
			'position' : 'relative',
			'max-width' : 'none'
		});;

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
				

				$this.addClass('active').width(imgWid).css('opacity', '1');

		   		thumbImgSibDiv.addClass('inactive').each(function(){
		   			var thisW = $(this).width();
		   			$(this).width( thisW * margineachOpend ).css('opacity', '0.4');
		   		});
	
	   	};//End of mouse over
	    	
	   	$.fn.LeaveAnimation = function(SliderWidth , margineach) {
	   		var $this = $(this),
				imgWid = $this.data('editedwidth');
	       	
			$this.removeClass('active').width(imgWid);
	       	SlideR.find(elmwrap).css('opacity', '0.4').not('.active').removeClass('inactive').each(function(){
	       		$(this).width( $(this).data('editedwidth') );
	    	}); //End of Each change Margin
	    
	    };//End of mouseleave

	    widhtS = 0;
		 // adjust new width and declare animation when hover
		SlideR.find(elmwrap).each(function(idx,el){
			var imgW = $(el).find('img').width();

			$(el).width( Math.round(imgW * margineach)); //change images width so they will super fit to the slider
			$(el).attr('data-orginalwidht', imgW).attr('data-editedwidth', Math.round(imgW * margineach)).find('img').css({
				margin: '0',
				padding: '0'
			});
			$(el).css({'margin': 0, 'clear': 'none','padding':0}); //change images width so they will super fit to the slider
			widhtS += Math.round(imgW * margineach);
			console.log(Math.round(widhtS));
		})
		.mouseover(function(){$(this).HoverAnimation(SliderWidth , margineach)})
		.mouseleave(function(){$(this).LeaveAnimation(SliderWidth , margineach)});

	}

});
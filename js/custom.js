/*global $, jQuery, alert*/

$(function () {
	
	'use strict';
	
	// Trigger Nice Scroll Plugin
	
	$('html').niceScroll({
		cursorcolor: '#E16F21',
		cursorwidth: "10px",
		cursorborderradius: "5px",
		cursorborder:'1px solid #E16F21'
	});
	
	// Change Header Height
	
	$('.header').height($(window).height());
	
	// Scroll To Features and Our Team
	
	$('.header .arrow i').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('.features').offset().top
			
		}, 1500);
		
	});
	
	$('.hire').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('.our-team').offset().top
		
		},1500);
		
	});
	
	
	// Show Hidden Items from Works
	
	//$('.show-more').click(function () {
	//	$('.our-work .hidden').fadeIn(1500);
	// });
	$('.show-more').click(function () {
		
		if ($('.our-work .hidden').css('display') === 'none') {
			
			$('.our-work .hidden').fadeIn(1500);
		
		} else {
			$('.show-more').click(function () {
				$('show-more').disable(true);
				alert("Es gint keine Fotos mehr");
				
			});
		}
	
	});
	
	// Check Testimonials
	
	var leftArrow = $('.testim .fa-chevron-left'),
		
		rightArrow = $('.testim .fa-chevron-right');
	
	function checkClients() {
		
		if ($('.testim .client:first').hasClass('active')) {
			
			leftArrow.fadeOut();
			
		} else {
			
			leftArrow.fadeIn();
			
		}
		
		if ($('.testim .client:last').hasClass('active')) {
			
			rightArrow.fadeOut();
		} else {
			
			rightArrow.fadeIn();
		}
	}
	
	checkClients();
	
	$('.testim i').click(function () {
		
		if ($(this).hasClass('fa-chevron-right')) {
			
			$('.testim .active').fadeOut(100, function () {
				
				$(this).removeClass('active').next('.client').addClass('active').fadeIn();
				
				checkClients();
				
			});
			
			
		} else {
			
			$('.testim .active').fadeOut(100, function () {
				
				$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
				
				checkClients();
				
			});
			
			
		}
		
	});
	
	
});
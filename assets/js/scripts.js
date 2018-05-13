(function ($) {
	"use strict";

    jQuery(document).ready(function($){



         $('#menu').slicknav({
            label: '',
            prependTo: '.mobile-menu',
            allowParentLinks: true,
            closeOnClick: true
        });

    	$('.gallery-slider').owlCarousel({
    		items:3,
    		autoplay:false,
    		dots:false,
    		nav:false,
    		margin:20,
    		loop:true
    	});
        
 		$(".small-gallery-slider").owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            margin:20,
            autoplay: true,
            navText: ['<img src="assets/img/angle-left.png">','<img src="assets/img/angle-right.png">'],
            responsive:{
		        0:{
		            items:1,
		            nav:false
		        },
		        600:{
		            items:3,
		            nav:false
		        },
		        1000:{
		            items:7,
		        }
			}    
         });

        $('.slider').slick({
		  centerMode: true,
		  centerPadding: '60px',
		  slidesToShow: 3,
		  arrows: false,
		  autoplay: true,
		 slidesToScroll: 3,
		  autoplaySpeed: 2000,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: false,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});

    });


}(jQuery));	
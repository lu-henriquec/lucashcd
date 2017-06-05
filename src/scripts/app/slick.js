'use strict';
// ===============================================================
/* SLICK SLIDE */
// ===============================================================
require('vendor/slick');

module.exports = function() {

	$('.js-slider-planos').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		// mobileFirst: true,
		responsive: [{
			breakpoint: 769,
			settings: {
				dots: true,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$('.js-slider-modelos').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 1000,
		draggable: false,
		pauseOnHover:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		//asNavFor: '.js-slider-modelos',
		// dotsClass: 'slick-dots custom-dots',
		// customPaging: function (slider, i) {
		// 	// console.log(slider);
		// 	return '<span>' + (i + 1) + '/</span><span>' + slider.slideCount + '</span>';
		// }
	});

	$('.js-slider-passo-a-passo').slick({
		dots: false,
		arrows: false,
		fade: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.js-lista-passo-a-passo li').each(function(i) {
		$('.js-lista-passo-a-passo .slide-' + i + ' a').click(function(){
			$('.js-lista-passo-a-passo li').removeClass('active');
			$(this).parent().addClass('active');
			$('.js-slider-passo-a-passo').slick('slickGoTo', i);
		})
	})

};
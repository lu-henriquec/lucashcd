'use strict';
// ===============================================================
/* FIXED HEADER */
// ===============================================================

module.exports = function() {

	function fixedHeader() {
		if ($(window).scrollTop() > 42) {
			$('header').animate({
			}, 5000, function() {
				$('header').addClass('fixed');
			}).stop(false, true);
		}else{
			$('header').animate({
			}, 5000, function() {
				$('header').removeClass('fixed');
			}).stop(false, true);
		}
	}
	fixedHeader();

	$(window).on('scroll',function(){
		fixedHeader();
	});

};
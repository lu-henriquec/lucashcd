'use strict';
// ===============================================================
/* BTN.SCROLL */
// ===============================================================

module.exports = function() {
	
	$('.btn.scroll').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(($(this).attr('href') || '').split('?')[0]).offset().top - 42 + 'px'
		}, 'slow');
		return false;
	});
	
};
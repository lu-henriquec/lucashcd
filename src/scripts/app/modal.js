'use strict';

module.exports = function() {
    var open        = $('.openCurriculo'),
        close 		= $('.modal .close'),
        themodal 	= $('.modal');

    open.click(function(e) {
        e.preventDefault();
        themodal.removeClass('slideOutDown');
        themodal.addClass('modalActive slideInUp');
    });

    close.click(function(e) {
        e.preventDefault();
        themodal.removeClass('slideInUp');
        themodal.addClass('slideOutDown');
    });
};
'use strict'

module.exports = function() {
    var open        = $('.openCurriculo'),
        close 		= $('.modal .close'),
        themodal 	= $('.modal');

    open.click(function(e) {
        e.preventDefault();
        themodal.addClass('modalActive');
    });

    close.click(function(e) {
        e.preventDefault();
        themodal.removeClass('modalActive');
    });
};
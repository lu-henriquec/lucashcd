'use strict';

// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function noop() {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

String.prototype.formatArray = function(a){
	return this.replace(/\{(\d+)\}/g, function(r,e){return a[e];});
};
String.prototype.render = function(obj){
	return this.replace(/\{(\w+)\}/g, function(r,e){return obj[e];});
};

if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,'');
	};
}

if (!String.prototype.capitalize) {
	String.prototype.capitalize = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	};
}

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function (f, c) {
		for (var i = 0; i < this.length; i++) f.call(c, this[i], i, this);
	};
}
if(!Array.prototype.map){
	Array.prototype.map = function (f, c) {
		for (var r = [], i = 0; i < this.length; i++) {
			r[i] = f.call(c, this[i], i, this);
		}
		return r;
	};
}
if(!Array.prototype.filter){
	Array.prototype.filter = function (f, c) {
		for (var r = [], j = 0, i = 0, s = this, t; i < s.length; i++) {
			if (f.call(c, t = s[i], i, s)) {
				r[j++] = t;
			}
		}
		return r;
	};
}
if(!Array.prototype.some){
	Array.prototype.some = function (f, c) {
		for (var i = 0; i < this.length; i++){
			if (f.call(c, this[i], i, this)) break;
		}
		return i < this.length;
	};
}

//jQuery extensions
;(function ($) {
	
	$.popupCenter = function(url, title, w, h) {
		// Fixes dual-screen position                         Most browsers      Firefox
		var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

		var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 3) - (h / 3)) + dualScreenTop;

		var win = window.open(url, title, 'centerscreen=1,resizable,scrollbars,status, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

		// Puts focus on the windows
		if( win && win.focus ){
			win.focus();
		}
	};
	
	$.pushEvent = function(event, data) {
		data = data || {};
		data.event = event;
		return dataLayer && dataLayer.push( data );
	};

	$.getPath = function( path ) {
		
		path = path || '';

		var href = window.location.href;
		
		if( href[ href.length - 1 ] !== '/' ) {
			href += '/';
		}
		
		return href + path;
	};
	
	$.getAjaxMessage = function(xhr ) {
		var message = '';
		if( xhr ) {
			message = xhr.responseJSON && xhr.responseJSON.error && xhr.responseJSON.error.message || xhr.statusText;
		}
		return message;
	};
	
	$.reduce = function(arr, fnReduce, valueInitial) {
		if (Array.prototype.reduce) {
			return Array.prototype.reduce.call(arr, fnReduce, valueInitial);
		}

		$.each(arr, function(i, value) {
			valueInitial = fnReduce.call(null, valueInitial, value, i, arr);
		});
		return valueInitial;
	};

	$.extend($.fn, {
		toScroll: function(offset) {
			var self = $(this);
			if( !self || self.length === 0 || ! self.is(':visible') ) return;

			$('html, body').stop().animate({
				scrollTop: self.offset().top + (offset || 0) + 'px'
			}, 1000);
		},
		scrollTo: function( target, offset ) {
			$( target || $(this).attr('href') ).toScroll(offset);
		},
		exists: function () {
			return $(this).length > 0 ? true : false;
		},
		validEmail: function() {
			return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( $(this).val());
		},
		validFullName: function() {
			return /(.*){3,}\s(.*).{3,}/i.test( $(this).val() );
		},
		serializeObject: function() {
			return $.reduce( $(this).serializeArray(), function(o, v) {
				o[v.name] = v.value;
				return o;
			}, {});
		}
	});

	$.extend($.expr[':'], {
		// http://jqueryvalidation.org/blank-selector/
		blank: function( a ) { return !$.trim('' + $(a).val()); },
		// http://jqueryvalidation.org/filled-selector/
		filled: function( a ) { return !!$.trim('' + $(a).val()); },
		// http://jqueryvalidation.org/unchecked-selector/
		unchecked: function( a ) { return !$(a).prop('checked'); },

		//Contains: function( elem ) { return $(elem).text().toUpperCase().indexOf(args.toUpperCase()) >= 0; }
	});

}(jQuery));
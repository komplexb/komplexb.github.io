$( document ).ready(function() {

  //

});

$(function() {
	smoothScrool(300);
//	workBelt();
//	workLoad();
});


function smoothScrool (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
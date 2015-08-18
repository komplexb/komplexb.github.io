$( document ).ready(function() {

  //

});

$(function() {
	smoothScroll(300);
	workBelt();
	workLoad();
	clientStuff();
	ariaWorkBelt();
	$("header h1, .biglink").fitText(1.2, { minFontSize: '20px', maxFontSize: '72px' })
});

function smoothScroll (duration) {
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

function ariaWorkBelt() {
  /*
   * set images links as role=button 
   * which will fallback to links if there is no JS
   */
  var ttwAttr = {
    role: "button", 
    "aria-expanded": "false"
  };
  $(".thumb-unit-wrap").attr(ttwAttr);
  
//  var wwAttr = {
//    role: "alert",
//    "aria-live": "assertive"
//  };
//  $(".work-wrap").attr(wwAttr);
}

function workBelt() {
  var link;
  $('.thumb-container .thumb-unit-wrap').click(function(e) {
    e.preventDefault();
    link = $(this);
    
    $('.work-belt').addClass("slided");
    $('.work-container').show(function() {
      link.attr("aria-expanded", "true");
      $(".work-wrap").attr("aria-hidden", "false");
      $('.project-title').focus();
    });
  });
  
  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-container').hide(800, function() {
      $(".work-wrap").attr("aria-hidden", "true");
      link.attr("aria-expanded", "false").focus();
    });
  });

}

function workLoad() {
  
  $.ajaxSetup({ cache: true });
  
  $('.thumb-container .thumb-unit-wrap').click(function(e) {
    e.preventDefault();
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.find('.thumb-unit').data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newfolder + '/';
      
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle)
      .attr('aria-label', 'Details of Project or Engagement: ' + newTitle);
  });
  
}

function clientStuff() {
	
	$('.client-logo, .clients-mobile-nav span').click(function() {
		var $this = $(this),
			$siblings = $this.parent().children(),
			position = $siblings.index($this);
		
		$('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
		$siblings.removeClass('active-client');
		$this.addClass('active-client');
	});
	
	$('.client-control-next, .client-control-prev').click(function() {
		var $this = $(this),
			curActiveClient = $('.clients-belt').find('.active-client'),
			position = $('.clients-belt').children().index(curActiveClient),
			clientNum = $('.client-unit').length;
		
		if($this.hasClass('client-control-next')) {
			if(position < clientNum - 1) {
				$('.active-client').removeClass('active-client').next().addClass('active-client');
			}
			else {
				$('.client-unit').removeClass('active-client').first().addClass('active-client');
				$('.client-logo').removeClass('active-client').first().addClass('active-client');
			}
		}
		else {
			if(position === 0) {
				$('.client-unit').removeClass('active-client').last().addClass('active-client');
				$('.client-logo').removeClass('active-client').last().addClass('active-client');
			}
			else {
				$('.active-client').removeClass('active-client').prev().addClass('active-client');
			}
		}
		
		
	});
}
$( document ).ready(function() {

  workBelt();
//  workLoad();
  clientStuff();
  ariaWorkBelt();
  $("header h1, .biglink").fitText(1.2, { minFontSize: '20px', maxFontSize: '72px' })

});

$(function() {
	
});

/*
 * SmoothScroll
 * Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({scrollTop: target.offset().top}, 1000, function()
        {
          target.attr('tabindex', '-1'); // give target focus support
          target.focus(); // set focus on new target
        });
        return false;
      }
    }
  });
});

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
  var $this;
  $('.thumb-container .thumb-unit-wrap').click(function(e) {
    e.preventDefault();
    $this = $(this);
    
    $('.work-belt').addClass("slided");
    $('.work-container').show(function() {
      workLoad($this);
    });
  });
  
  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    $('.work-container').hide(800, function() {
      $(".work-wrap").attr("aria-hidden", "true");
      $this.attr("aria-expanded", "false").focus();
      
      $('.project-load').empty();
      $('.project-title').empty();
    });
  });

}

function workLoad($this) {
  
  $.ajaxSetup({ cache: true });
  
//    var $this = $(this),
      var newTitle = $this.find('strong').text(),
        newfolder = $this.find('.thumb-unit').data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newfolder + '/';
      
    $('.project-load').html(spinner).load(newHTML, function() {
      $('.project-title').text(newTitle)
        .attr('aria-label', 'Project or Engagement details: ' + newTitle).focus();
      $this.attr("aria-expanded", "true");
      $(".work-wrap").attr("aria-hidden", "false");
      $('.project-title').focus();
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
$(document).ready(function () {
  ariaWorkBelt()
  workBelt()
  clientStuff()
  $('header h1, .biglink').fitText(1.2, {
    minFontSize: '20px',
    maxFontSize: '72px'
  })
})

/*
 * SmoothScroll
 * Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html,body').animate(
          { scrollTop: target.offset().top },
          1000,
          function () {
            target.attr('tabindex', '-1') // give target focus support
            target.focus() // set focus on new target
          }
        )
        return false
      }
    }
  })
})

/**
 * a11yclick - Easily handle keyboard click events on non semantic button elements.
 *
 * @param {Object} event Click/keyboard event object.
 * @returns {Boolean} Returns true or false depending on event type and code.
 */
var a11yclick = function (event) {
  'use strict'

  var code = event.charCode || event.keyCode,
    type = event.type

  if (type === 'click') {
    return true
  } else if (type === 'keydown') {
    if (code === 32 || code === 13) {
      event.preventDefault()
      return true
    }
  } else {
    return false
  }
}

function ariaWorkBelt () {
  /*
   * set images links as role=button
   * which will fallback to links if there is no JS
   */
  var workItems = {
    role: 'button',
    'aria-expanded': 'false',
    'aria-controls': 'work-item-details'
  }
  $('.thumb-unit-wrap').attr(workItems)
}

function workBelt () {
  var $this
  $('.thumb-container .thumb-unit-wrap')
    .not('.is-link')
    .on('click keydown', function (e) {
      e.preventDefault()
      $this = $(this)

      if (a11yclick(e)) {
        $('.work-belt').addClass('slided')
        $('.work-container').show(function () {
          workLoad($this)
        })
      }
    })

  $('.work-return').click(function () {
    $('.work-belt').removeClass('slided')
    $('.work-container').hide(800, function () {
      $('.work-wrap').attr('aria-hidden', 'true')
      $this.attr('aria-expanded', 'false').focus()
    })
  })
}

function workLoad ($this) {
  $.ajaxSetup({ cache: true })

  var newTitle = $this.find('strong').text(),
    spinner = '<div class="loader">Loading...</div>',
    href = $this.attr('href'),
    newHTML = href.substr(0, href.indexOf('/page') + 1)

  $('.project-load')
    .html(spinner)
    .load(newHTML, function () {
      $this.attr('aria-expanded', 'true')
      $('.work-wrap').attr('aria-hidden', 'false')
      $('.project-title')
        .text(newTitle)
        .attr('aria-label', 'Project or Engagement details: ' + newTitle)
        .focus()

      cssSlidy()
    })
}

function clientStuff () {
  $('.client-logo, .clients-mobile-nav span').click(function () {
    var $this = $(this),
      $siblings = $this.parent().children(),
      position = $siblings.index($this)

    $('.client-unit')
      .removeClass('active-client')
      .eq(position)
      .addClass('active-client')
    $siblings.removeClass('active-client')
    $this.addClass('active-client')
  })

  $('.client-control-next, .client-control-prev').click(function () {
    var $this = $(this),
      curActiveClient = $('.clients-belt').find('.active-client'),
      position = $('.clients-belt')
        .children()
        .index(curActiveClient),
      clientNum = $('.client-unit').length

    if ($this.hasClass('client-control-next')) {
      if (position < clientNum - 1) {
        $('.active-client')
          .removeClass('active-client')
          .next()
          .addClass('active-client')
      } else {
        $('.client-unit')
          .removeClass('active-client')
          .first()
          .addClass('active-client')
        $('.client-logo')
          .removeClass('active-client')
          .first()
          .addClass('active-client')
      }
    } else {
      if (position === 0) {
        $('.client-unit')
          .removeClass('active-client')
          .last()
          .addClass('active-client')
        $('.client-logo')
          .removeClass('active-client')
          .last()
          .addClass('active-client')
      } else {
        $('.active-client')
          .removeClass('active-client')
          .prev()
          .addClass('active-client')
      }
    }
  })
}

function fixTopBar() {    
    var mainContentWidth = $('#main-content').width() - 1; //get width of main content body
    var mainLeftOffset = $('#main-content').offset().left + 15; //get left offset of main content body
    $('#wrap-main-nav').css('width',mainContentWidth + 'px').css('left', mainLeftOffset + 'px'); //give the wrapping container of the topbar the new figures
    $('.fixed.expanded:not(.top-bar) .title-area').css('width',mainContentWidth + 'px'); //adjust the width of the mobile version of the top nav
}
$(window).resize(function() {
    fixTopBar();
});
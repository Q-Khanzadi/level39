jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar-default');

    if (scrollPos >= $("#about-us").position().top) {
      navbar.addClass('change-color');
    } else {
      navbar.removeClass('change-color');
    }
  });
});
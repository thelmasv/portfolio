$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(‘body’).addClass(‘changeColor’)
      } else {
         $(‘body’).removeClass(‘changeColor’)
      }
   });
});
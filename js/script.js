(function ($) {
  'use strict';

  // Preloader
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });
})(jQuery);

let pop=document.getElementById("popup1");
let pop2=document.getElementById("popup2");
          function show1() {
            pop.style.visibility="visible";
            pop.style.opacity="1";
            pop.style.top="120px";
            document.body.style.overflow="hidden";
           }
         function hide1() {
          pop.style.visibility="hidden";
          pop.style.opacity="0";
          pop.style.top="0px";
          document.body.style.overflow="auto";
         }
         function show2() {
            pop2.style.visibility="visible";
            pop2.style.opacity="1";
            pop2.style.top="120px";
            document.body.style.overflow="hidden";
           }
         function hide2() {
          pop2.style.visibility="hidden";
          pop2.style.opacity="0";
          pop2.style.top="0px";
          document.body.style.overflow="auto";
         }
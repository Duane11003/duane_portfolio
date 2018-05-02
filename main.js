// contact button rollover

$(".hero_header3").hover (
  function() {
    $(this).css("background-color", "rgb(255, 193, 5)")
  }, function() {
    $(this).css("background-color", "rgb(255,226,110)")
  },
);

$(".submit_button").hover (
  function() {
    $(this).css("background-color", "rgb(170, 1, 1)")
  }, function () {
    $(this).css("background-color", "rgb(225, 0, 39)")
  },
);

// contact button scroll

$("#scroll").click(function() {
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');
  return false;
});

// $(window).scroll(function() {
//     var winHeight = $(this).height();
//     var scrollTop = $(this).scrollTop();
//
//     var elemHeight = $(".skills-Animate").height();
//     var elementTop = $(".skills-Animate").position().top;
//
//     if (elementTop < scrollTop + winHeight && scrollTop < elementTop + elemHeight)
//         var opacity = 1;
//     else
//         var opacity = 0;
//
//     $(".skills-Animate").stop().animate({
//         opacity: opacity
//     }, "slow");
// });

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".skills-Animate").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

// modify 'body' element so screen turns black

$(".img").hover(function() {
  $(this).toggleClass("img_hover");
});

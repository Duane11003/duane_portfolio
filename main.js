// contact button rollover

$(".hero_header3").hover (
  function() {
    $(this).css("background-color", "white")
  }, function() {
    $(this).css("background-color", "rgb(255,226,110)")
  },
);

// contact button scroll

$("#scroll").click(function() {
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');
  return false;
});

$(window).scroll(function() {
    var winHeight = $(this).height();
    var scrollTop = $(this).scrollTop();

    var elemHeight = $(".skills-Animate").height();
    var elementTop = $(".skills-Animate").position().top;
    console.log(winHeight, scrollTop, elemHeight, elementTop);
    
    if (elementTop < scrollTop + winHeight && scrollTop < elementTop + elemHeight)
        var opacity = 0;
    else
        var opacity = 1;

    $(".skills-Animate").stop().animate({
        opacity: opacity
    }, "slow");
});

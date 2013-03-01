var s = skrollr.init(/*other stuff*/);

//The options (second parameter) are all optional. The values shown are the default values.
skrollr.menu.init(s, {
    animate: true, //skrollr will smoothly animate to the new position using `animateTo`.
    duration: 800, //How long the animation should take in ms.
    easing: 'linear' //The easing function to use.
});

$(".drawer-pull").click(function(){
  if ( $(".drawer").is(":hidden") ) {
    $(".drawer").show();
    $(".drawer-pull").addClass("pulled");
  } else {
    $(".drawer").hide();
    $(".drawer-pull").removeClass("pulled");
  }
});
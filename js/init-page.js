// var scroll_dir = $(window).bind('mousewheel', function(event) {
//   if (event.originalEvent.wheelDelta >= 0) {
//    return (console.log('Scroll up'));
//   }
//   else {
//       return (console.log('Scroll down')); //down direction
//   }
// });

$(document).ready(function(){
  $('.collapsible').collapsible();
  $('.materialboxed').materialbox();
});

$( ".collapsible-collapse-button" ).click(function() {
  $(this).closest(".collapsible").find("li").removeClass("active");
  $(this).closest(".collapsible").find("div.collapsible-header").removeClass("active");
  $(this).closest(".collapsible-body").css("display", "none");
});


$(window).scroll(function() {
  var height = $(window).scrollTop();
  var vh = $("#page-content" ).height()
  var nav_height = $("#magic-menu2").height();
  console.log(height, 0.75*vh)

  if(height>=nav_height){
    $('#magic-menu2').addClass('shrink')
    if(height>=0.5*vh){
      $('#magic-menu2').addClass('up')
    }
    else if(height<0.5*vh){
      $('#magic-menu2').removeClass('up')
    }
  }
  
  else if(height<nav_height){
    $('#magic-menu2').removeClass('shrink')
  }

})





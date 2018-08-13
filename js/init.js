// var scroll_dir = $(window).bind('mousewheel', function(event) {
//   if (event.originalEvent.wheelDelta >= 0) {
//    return (console.log('Scroll up'));
//   }
//   else {
//       return (console.log('Scroll down')); //down direction
//   }
// });

$(document).ready(function () {
  
  //pushpin
  $('.target').pushpin({
    top: 0,
    bottom: 1000,
    offset: 0
  });

  //scrollfire

  //scrollspy
  $('.scrollspy').scrollSpy({ scrollOffset: 0});

});

$(window).scroll(function() {
  var height = $(window).scrollTop();
  var landing_height = $("#landing").height();
  var nav_height = $("#magic-menu2").height();
  var project_height = $("#projects").height();
  // var firstCardPos = $("#landing").height()+96+64
  console.log(height,project_height )

  if(height>=landing_height/2){
    $('.sticky-bg2').addClass('show')
  }

  else if(height<landing_height/2){
    $('.sticky-bg2').removeClass('show')
  }

  
  if(height >= landing_height){
      $('#magic-menu2').addClass('shrink')
      
  }
 
  else if(height<landing_height){
    $('#magic-menu2').removeClass('shrink')

  }

  if(height >= landing_height+nav_height){
    $('.sticky-bg2').removeClass('show')
    $('.sticky-bg2').addClass('fix')
  }
  else if(height < landing_height+nav_height && height>landing_height/2){
    $('.sticky-bg2').removeClass('fix')
    $('.sticky-bg2').addClass('show')
  }

  if(height >= (project_height)){
    $('.landing-footer').addClass('show')
    $('#magic-menu2').addClass('up')
  }
  else if(height < project_height){
    $('.landing-footer').removeClass('show')
    $('#magic-menu2').removeClass('up')
  }

});








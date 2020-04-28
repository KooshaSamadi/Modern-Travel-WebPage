/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.navbar').addClass('solid');
    }
    else {
      $('.navbar').removeClass('solid');
    }
  });
});
/*========== MOBILE NAVIGATION CLOSE WHEN TOUCH ON SCREEEN ==========*/
$(document).ready(function(){
  $(document).click(function(event){
    var clickover=$(event.target);
    var _opened=$('.navbar-collapse').hasClass('show');
    if(_opened===true){
      $('.navbar-toggler').click();
    }
  })
})

/*========= SMOOTH SCROLLING WHEN CLICK ON NAVBAR ITEM ==============*/
$(document).ready(function(){
$('a').on('click',function(event){
  if(this.hash!==""){
    event.preventDefault();
    var hash=this.hash;
    $('html,body').animate({
      scrollTop:$(hash).offset().top},1000,function(){
        window.location.hash=hash;
      }
    );
  }//End if
});
});
/*========= BOUNCING DOWN ARROW FADING ==============*/
$(document).ready(function () {
  $(window).scroll(function () {
 $('.arrow').css('opacity',1-$(window).scrollTop()/400);
  });
});
/*========= MEET THE TEAM ==============*/
$(document).ready(function(){
  $("#team-slider").owlCarousel({
    items:4,
    autoplay:true,
    smartSpeed:1700,
    autoplayTimeout:2000,
   center:true,
    loop:true, 
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      576:{
        items:2
      },
      992:{
        items:3
      }


    }
  })
})
/*=========SKILLS COUNTERUP ==============*/
$(document).ready(function(){
  $('.counter').counterUp({
    delay:10,
    time:1500
  })
})
/*=========CLIENTS==============*/
$(document).ready(function(){
  $("#clients-slider").owlCarousel({
    items:4,
    autoplay:true,
    smartSpeed:2000,
    autoplayTimeout:4000,
   center:true,
    loop:true, 
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      576:{
        items:2
      },
      992:{
        items:3
      }

    }
  })
})

/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() { 
  $(window).scroll(function() { //when webpage is scrolled
    if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
      $('.top-scroll').fadeIn(); 
    } else { //if not
      $('.top-scroll').fadeOut(); 
    }
  });
});

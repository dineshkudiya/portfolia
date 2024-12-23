$(document).ready(function(){
    $(".fa-ellipsis-vertical").click(function(){
      $(".sidebar").toggleClass("sidebar-back");
      $(".main").toggleClass("main-background-shadow");
      $(".fa-bars").toggleClass("fa-bars-back");
    });
 


    $(".fa-bars").click(function(){
      $(".right").toggleClass("right-back");
      $("ul").toggleClass("opicity-back");
      $(".fa-ellipsis-vertical").toggleClass("fa-ellipsis-vertical-back");
      $(".main").toggleClass("main-background-shadow");
      
    });
 
 
  

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      dots:false,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });
  });


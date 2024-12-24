$(document).ready(function(){

    $(".fa-ellipsis-vertical").click(function(){
      $(".sidebar").toggleClass("sidebar-back");
      $("#content").toggleClass("main-background-shadow");
      $(".fa-bars").toggleClass("fa-bars-back");
    });
 


    $(".fa-bars").click(function(){
      $(".right").toggleClass("right-back");
      $("ul").toggleClass("opicity-back");
      $(".fa-ellipsis-vertical").toggleClass("fa-ellipsis-vertical-back");
      $("#content").toggleClass("main-background-shadow");
      
    });
 
    // $("#content").on('scroll', function () {
    //   if ($("#content").scrollTop() > 50) {
    //     $('.right').toggleClass("right-back");
    //     console.log("dinesh");
    //   } 
    // });
  

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


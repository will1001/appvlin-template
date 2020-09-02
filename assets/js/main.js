

// burger-button phone view
$('.burger-button').on('click', function (e) { 
    var element = $('.menu');
    var element2 = $('.burger-button i');
    var element3 = $('.overlay-layer');
    console.log("test")
  
    if (element.hasClass('hide')) {
        element.removeClass("hide");
        element.addClass("show");
        element2.removeClass("fa-bars");
        element2.addClass("fa-times");
        element3.removeClass("d-none");
        element3.addClass("d-block");
    } else {
        element.addClass("hide");
        element.removeClass("show");
        element2.removeClass("fa-times");
        element2.addClass("fa-bars");
        element3.removeClass("d-block");
        element3.addClass("d-none");
    }   
})


// overlay layer click
$('.overlay-layer').on('click', function (e) { 
    var element = $('.menu');
    var element2 = $('.burger-button i');
    var element3 = $('.overlay-layer');
        element.removeClass("show");
        element.addClass("hide");
        element2.removeClass("fa-times");
        element2.addClass("fa-bars");
        element3.removeClass("d-block");
        element3.addClass("d-none");
})

// list menu click
$('.menu li a').on('click', function (e) { 
    var element = $('.menu');
    var element2 = $('.burger-button i');
    var element3 = $('.overlay-layer');
        element.removeClass("show");
        element.addClass("hide");
        element2.removeClass("fa-times");
        element2.addClass("fa-bars");
        element3.removeClass("d-block");
        element3.addClass("d-none");
})

if ($('.banner-slider').length) {
      $('.banner-slider').owlCarousel({
        center: true,
        items: 1,
        // autoplay: true,
        // autoplayTimeout: 3000,
        loop: true,
        margin: 0,
        singleItem: true,
        nav: false,
        dots: false,
        thumbs: true,
        mouseDrag: false,
        touchDrag: true,
        thumbsPrerendered: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
      });
    }
    
var owlBannerSlider = $('.banner-slider');
    
var button = document.getElementsByClassName("icon-button");
    
for (let i = 0; i < button.length; i++) {
    // button onclick
    button[i].addEventListener('click', function() {
        owlBannerSlider.trigger('to.owl.carousel', i);
        //remove all active class button
        for (let i = 0; i < button.length; i++) { 
            button[i].classList.remove("active")         
        }
        // add class active to button clicked
        button[i].classList.add("active")
    }, false);
}
    

$('.ss-group').owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
        animateIn: 'Slide',
          responsive:{
          0:{
              items:1,
          },
          575:{
              items:3,
          },
          1025:{
              items:5,
          }
      }
})

// faq

$('#faq .accordion-button .title').on('click', function (e) { 
    var element = $(this).parent('#faq .accordion-button');
    element.hasClass('open') ? element.removeClass("open") : element.addClass("open")
})



// Nice Select
$(document).ready(function() {
  $('.select-lang').niceSelect();
});


// counter animation
$('#app-statistic h3').countUp({
      'time': 1500,
      'delay': 10
});

// Preloader Js
  $(window).on('load', function () {
    $('.preloader').fadeOut(1000);
  });

  // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    // aos js active
    new WOW().init()
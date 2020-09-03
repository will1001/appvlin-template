

// burger_button on click phone view
$('.burger_button').on('click', function (e) { 
    var menu = $('.menu');
    var burger_button = $('.burger_button i');
    var overlay_layer = $('.overlay_layer');
  
    if (menu.hasClass('hide')) {
        menu.removeClass("hide");
        menu.addClass("show");
        burger_button.removeClass("fa-bars");
        burger_button.addClass("fa-times");
        overlay_layer.removeClass("d-none");
        overlay_layer.addClass("d-block");
    } else {
        menu.addClass("hide");
        menu.removeClass("show");
        burger_button.removeClass("fa-times");
        burger_button.addClass("fa-bars");
        overlay_layer.removeClass("d-block");
        overlay_layer.addClass("d-none");
    }   
})


// overlay layer click
$('.overlay_layer').on('click', function (e) { 
    var menu = $('.menu');
    var element2 = $('.burger_button i');
    var element3 = $('.overlay_layer');
        menu.removeClass("show");
        menu.addClass("hide");
        burger_button.removeClass("fa-times");
        burger_button.addClass("fa-bars");
        overlay_layer.removeClass("d-block");
        overlay_layer.addClass("d-none");
})

// list menu click
$('.menu li a').on('click', function (e) { 
    var menu = $('.menu');
    var element2 = $('.burger_button i');
    var element3 = $('.overlay_layer');
        menu.removeClass("show");
        menu.addClass("hide");
        burger_button.removeClass("fa-times");
        burger_button.addClass("fa-bars");
        overlay_layer.removeClass("d-block");
        overlay_layer.addClass("d-none");
})


// Banner slider 
if ($('.banner-slider').length) {
      $('.banner-slider').owlCarousel({
        center: true,
        items: 1,
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
    
// slider for app screen shot
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

// faq open / close content when button clicked

$('#faq .accordion-button .title').on('click', function (e) { 
    var element = $(this).parent('#faq .accordion-button');
    element.hasClass('open') ? element.removeClass("open") : element.addClass("open")
})



// Nice Select
$(document).ready(function() {
  $('.select-lang').niceSelect();
});


// counter up animation
$('#app-statistic h3').countUp({
      'time': 2000,
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

$('.button').click(function (e){
    e.preventDefault();
});

// burger-button phone view
$('.burger-button').on('click', function (e) { 
    var element = $('.menu');
    var element2 = $('.burger-button i');
    var element3 = $('.overlay-layer');
    if (element.hasClass('opa-0-phone')) {
        element.removeClass("opa-0-phone");
        element.addClass("opa-1");
        element2.removeClass("fa-bars");
        element2.addClass("fa-times");
        element3.removeClass("d-none");
        element3.addClass("d-block");
    } else {
        element.addClass("opa-0-phone");
        element.removeClass("opa-1");
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
        element.removeClass("opa-1");
        element.addClass("opa-0-phone");
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
    

$('.partner').owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      slideTransition:'linear',
      responsive:{
          0:{
              items:3,
          },
          480:{
              items:3,
          },
          768:{
              items:5,
          }
      }
})

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

$('.faq .accordion-button .title').on('click', function (e) { 
    var element = $(this).parent('.faq .accordion-button');
    element.hasClass('open') ? element.removeClass("open") : element.addClass("open")
    // // element.hasClass('open') ? element.find('.content').slideUp(300, "swing") : element.find('.content').slideDown(300, "swing")
    // if (element.hasClass('open')) {
    //     element.removeClass("open")
    //     element.find('.content').slideUp(300, "swing")
    // } else {
    //     element.addClass("open")
    //     element.find('.content').slideDown(300, "swing")
    // }
})



// Nice Select
$(document).ready(function() {
  $('.select-lang').niceSelect();
});
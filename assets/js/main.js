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
    
    
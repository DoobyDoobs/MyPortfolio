$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programmer", "Web Developer", "Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Programmer", "Web Developer", "Gamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


//SLIDESHOW STUFF
let slideIndexes = {};

function showSlides(slideshowId) {
    let slides = document.querySelectorAll(`#${slideshowId} .slide`);
    let slideIndex = slideIndexes[slideshowId] || 0;
    
    slides.forEach(slide => slide.style.display = "none");

    slides[slideIndex].style.display = "block";
}


function changeSlide(n, slideshowId) {
    let slides = document.querySelectorAll(`#${slideshowId} .slide`);
    let slideIndex = slideIndexes[slideshowId] || 0;

    slideIndex += n;  

    if (slideIndex >= slides.length) {
        slideIndex = 0; 
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;  
    }

    slideIndexes[slideshowId] = slideIndex;
    showSlides(slideshowId);
}


function autoSlide(slideshowId) {
    setInterval(() => {
        changeSlide(1, slideshowId); 
    }, 5000);  
}


function initializeSlideshows() {
    let slideshowIds = ["slideshow1", "slideshow2", "slideshow3", "slideshow4"]; 

    slideshowIds.forEach(slideshowId => {

        slideIndexes[slideshowId] = 0;
        showSlides(slideshowId);

        autoSlide(slideshowId);
    });
}

window.onload = initializeSlideshows;
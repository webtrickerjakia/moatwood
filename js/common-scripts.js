
(function($){
	$(function(){


        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });


        //FAQs Accordion Function
            $(".accordion-item").each(function(){
                var $this = $(this);
                var $accordionText = $this.find(".accordion-text");
    
                // Add a span with a "+" sign to each accordion header
                $this.find(" > h5").append('<span class="accordion-sign">+</span>');
    
                $this.find(" > h5").on("click touch", function(){
                    $(".accordion-item").removeClass("active");
                    $(".accordion-item .accordion-text").slideUp();
    
                    if($accordionText.is(":visible")){
                        $this.removeClass("active");
                        $accordionText.slideUp();
                        $this.find(".accordion-sign").text("+");
                    }
                    else{
                        $this.addClass("active");
                        $accordionText.slideDown();
                        $this.find(".accordion-sign").text("-");
                        $(".accordion-item").not($this).removeClass("active").find(".accordion-sign").text("+");
                        $(".accordion-item").not($this).find(".accordion-text").slideUp();
                    }
                });
            });
      

        
        if ($('.sustainable-items').length) {
            $(window).on('load resize', function() {
                if ($(window).width() <= 991) {
                    $('.sustainable-items').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 1000,
                        infinite: true,
                        variableWidth: false,
                        
                    });
                } else {
                 
                    if ($('.sustainable-items').hasClass('slick-initialized')) {
                        $('.sustainable-items').slick('unslick');
                    }
                }
            });
        }



        if ($('#slider-item').length) {
            $(window).on('load resize', function() {
                if ($(window).width() <= 991) {
                    $('#slider-item').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        arrows: false,
                        dots: false,
                        autoplay: false,
                        autoplaySpeed: 3000,
                        speed: 1000,
                        infinite: true,
                        variableWidth: false,
                        
                    });
                } else {
                 
                    if ($('#slider-item').hasClass('slick-initialized')) {
                        $('#slider-item').slick('unslick');
                    }
                }
            });
        }










        
    });
    // End the solutin card carousel
    
    

	

})(jQuery)


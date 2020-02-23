$(document).ready(function () {

    //    START SLIDER JS CODE
    $("#carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    });
    //    END SLIDER JS CODE
    
     //    START SECTION6 JS CODE
    $(".officeNear").click(function () {
        $(".office").slideToggle(2000);
        $(".office").css({
            color: "white",
            backgroundColor: "black"
        });

    });

    $(".callccenter").click(function () {
        $(".call").slideToggle(2000);
        $(".call").css({
            color: "white",
            backgroundColor: "black"
        });

    });
     //    END SECTION6 JS CODE
    
     //    END SECTION6 PROGRESSBAR JS CODE
        $('#circle').circleProgress({
            value: 0.82,
            size: 90,
            fill: {
                gradient: ["red", "orange"]
            }
        });

        $('#circle1').circleProgress({
            value: 0.08,
            size: 90,
            fill: {
                gradient: ["red", "orange", "black", "white"]
            }
        });

        $('#circle2').circleProgress({
            value: 0.98,
            size: 90,
            fill: {
                gradient: ["red", "orange", "purple"]
            }
        });

        $('#circle3').circleProgress({
            value: 0.41,
            size: 90,
            fill: {
                gradient: ["red", "orange"]
            }
        });

        $('#circle4').circleProgress({
            value: 0.77,
            size: 90,
            fill: {
                gradient: ["red", "orange", "black", "white"]
            }
        });

        $('#circle5').circleProgress({
            value: 0.56,
            size: 90,
            fill: {
                gradient: ["red", "orange", "purple"]
            }
        });
    
     //    END SECTION6 PROGRESSBAR JS CODE
    
 

});
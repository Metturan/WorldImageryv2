$(document).ready(function(){

    $(".meditate").delay(300).animate({
        opacity: 1
    }, 1000);

$("li").hover(function(){
    $(this).css("color", "white").fadeTo(300, 0.5);
    }, function(){
    $(this).css("color", "white").fadeTo(300, 1);
}); 


$("#arrow").click(function (){
                $('html, body').animate({
                    scrollTop: $("#anchor").offset().top
                }, 700);
            });

$("#arrow").hover(function(){
    $(this).css("color", "white").fadeTo(300, 1);
    }, function(){
    $(this).css("color", "white").fadeTo(300, 0.5);
}); 




});
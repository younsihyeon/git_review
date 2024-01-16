$(document).ready(function(){
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
        }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    $(".substance li:first").click(function(){
        $("#modal").addClass("active");
     });
     $(".btn").click(function(){
        $("#modal").removeClass("active");
     });
});
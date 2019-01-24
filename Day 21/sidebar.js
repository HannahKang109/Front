$(document).ready(function(){
    $('.ham-menu').click(function(){
        //animate는 css 효과를 서서히 나타나도록 함 1000 밀리세컨이어서 1초 동안 나타나도록 함
        $('.sidebar').animate({right:'0'},1000);
    });
    $('.sidebar-close').click(function(){
        $('.sidebar').animate({right:'-200px'},1000);   
    });   
});  
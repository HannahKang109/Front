$(document).ready(function(){
    var swiper = new Swiper('.contents.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    var titleSwiper = new Swiper('.title.swiper-container', {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 30,
        // 해당 메뉴를 클릭하면 바로 이동
        slideToClickedSlide:true
    });
    swiper.controller.control = titleSwiper;
    titleSwiper.controller.control = swiper;
    //클릭했을때만 화면이 넘어가도록 함
    //.carousel 또는 #demo로 할 수 있음
    $('.carousel').carousel('pause');
	new daum.roughmap.Lander({
		"timestamp" : "1546584191318",
		"key" : "rn7n",
		"mapWidth" : "1260",
		"mapHeight" : "650"
	}).render();
});  
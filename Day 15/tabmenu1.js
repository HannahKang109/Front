$(document).ready(function(){
	$('.tabmenu').first().css('border-bottom-color', 'white');
	// $('#content1').first().css('display', 'block');
	$('.tabmenu').click(function(){
		$('.tabmenu').css('border-bottom-color', 'black');
		$(this).css('border-bottom-color', 'white');
		//attr은 속성 정보를 가져오는 것
		var id = $(this).attr('id'); 
		var num = getNumber(id,'menu');
		displayContent(num);
	});
	//주어진 매개변수의 숫자에 맞는 박스를 보여주는 함수
	function displayContent(index){
		$('.content').css('display','none');
		$('#content'+index).css('display','block');
	}
	//문자열이 주어지면 문자열 마지막에 있는 숫자를 가져오기 위한 함수
	function getNumber(tabmenu,id){
		//menu11 menu
		var index = tabmenu.indexOf(id);//0 
		var length = id.length;//4
		return tabmenu.substr(index+length);
	}
	displayContent(11);
	// $('#menu1').click(function(){
	// 	$('.content').css('display','none');
	// 	$('#content1').css('display','block');
	// });
	// $('#menu2').click(function(){
	// 	$('.content').css('display','none');
	// 	$('#content2').css('display','block');
	// });
	// $('#menu3').click(function(){
	// 	$('.content').css('display','none');
	// 	$('#content3').css('display','block');	
	// });
});
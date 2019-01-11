$(document).ready(function(){
	//input에 대괄호 안에 속성을 넣을 수 있음
	// $('#book').click(function() <-책을 클릭할때만 해당하나 아래는 모든 체크박스에 해당
	$('input[type=checkbox]').click(function(){
		//val() <- 매개변수가 없으므로 값을 가져오는 것
		var text = $(this).val();
		// var input = $('input[type=text]');
		// var check = $(this);
		$('input[type=text]').val(text);
		//선택되지 않은 체크박스를 체크해지 함
		// .prop('checked',''); 체크 설정 해제
		// .prop('checked','checked'); 체크 설정
	// $('input[type=checkbox]').not(this).prop('checked','');
	// //체크된 메뉴를 다시 체크하여 체크를 해제하는 경우는
	// //체크의 value와 인풋창의 value가 같다.
	// if(input.val() == check.val()){
	// 	input.val('');
	// }else{
	// 	input.val(check.val());
	// }
	});
});






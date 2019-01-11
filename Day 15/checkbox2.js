$(document).ready(function(){
	$('input[type=checkbox]').click(function(){
		//인풋창에 입력된 문자열들을 받아와서 빈 문자열이 아니면 배열에 저장
		var arr = new Array();
		$('input[type=text]').each(function(){
			var text = $(this).val();
			$(this).val('');  //두번째 들어가는 부분을 지워주기 위해서 사용
			if(text != '')
				arr.push(text);
			});
		//클릭한 체크박스의 value를 가져옴
		var check = $(this);
		//배열에 해당 체크박스의 value가 있는지를 확인
		var isContain = arr.indexOf(check.val());
		//체크 박스의 value가 배열에 없고 배열의 길이가 2이면 해당 체크박스의 체크를 비 활성화
		if(isContain < 0 && arr.length == 2){
			check.prop('checked', '');
		}
		//길이가 2가 아니면 해당 배열에 추가하고 해당 체크박스의 체크를 활성화
		else if(isContain < 0 && arr.length != 2){
			arr.push(check.val());
			check.prop('checked', 'checked');
		}
		//체크박스의 value가 배열에 있으면 배열에서 해당 문자열을 제거
		else{
			arr.splice(isContain, 1);
		}
		//배열에 있는 문자열을 input창에 하나씩 뿌려줌
		for(var i=0; i<arr.length; i++){
			$('input[type=text]').eq(i).val(arr[i]);
		}
	});
});






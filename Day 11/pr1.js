// input 태그와 button태그를 이용하여 두 수를 입력하고 
// 버튼을 누르면 두 수의 합이 알람창으로 출력되도록 작성해보세요.
//내가 한 것
function printSum(){
var input = document.querySelector('.input');
var input2 = document.querySelector('.input2');
var sum = 0;
a = parseInt(input.value);
b = parseInt(input2.value);
console.log(a);
console.log(b);
sum = a + b;

console.log(sum);
}

//선생님이 한 것
function printSum(){
	var sum = 0;
	var inputs = document.getElementsByTagName('input');
	for(var i=0; i<2; i++){
		//각 input 태그에 있는 값(문자열)을 가져옴
		var strNum = inputs[i].value;
		//가져온 값을 정수로 변환
		var num = parseInt(strNum);
		//sum에 정수를 누적
		sum += num;
	}
	alert(sum);
}

function printSum2(){
	var strNum1 = document.getElementById('num1').value;
	var strNum2 = document.getElementById('num2').value;
	var num1 = parseInt(strNum1);
	var num2 = parseInt(strNum2);
	alert(num1 + num2);
}

function printSum3(){
	var sum = 0;
	var inputs = document.querySelectorAll('input');
	for(var i=0; i<2; i++){
		//각 input 태그에 있는 값(문자열)을 가져옴
		var strNum = inputs[i].value;
		//가져온 값을 정수로 변환
		var num = parseInt(strNum);
		//sum에 정수를 누적
		sum += num;
	}
	alert(sum);
}

function printSum4(){
	var strNum1 = document.querySelector('input#num1').value;
	var strNum2 = document.querySelector('input#num2').value;
	var num1 = parseInt(strNum1);
	var num2 = parseInt(strNum2);
	alert(num1 + num2);
}


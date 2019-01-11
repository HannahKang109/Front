


//onload = body 태그안의 내용들이 구성된 후 (화면이 출력된 후) function(){}안에 있는 코드들이 실행됨
// window.onload = function(){
// 	printMulti();
// 	alert('Hello!!');
// }


//구구단 전체를 출력하는 함수
function printMulti(){
	for(var i = 2; i<= 9; i++){
		multi(i);
	}
}


//a단을 출력하는 함수
function multi(a){
	console.log(a+"단");
	for(var i = 1; i<= 9; i++){
		printMul(a,i);
	}
}
//a*i를 출력하는 함수
function printMul(a,i){
	var res = a*i;
	var str = "" + a + "x" + i + "=" + res;
	console.log(str);
}

// for(i=2; i<=9; i++){
// 	for(j=1; j<=9; j++){
// 		window.document.write(i,"X",j,"=",i*j,"<br>");
// 	}
// }

var array = {name:"강한나", age:21, address:"청주시"};
//key : 배열 array의 각 키값인 name, age, address를 가져옴
for(var key in array){
	console.log(key + " : " +array[key])
}

var array1 = [789, 0, 1,"123",456]
var array2 = [789,"1234","456"];
//concat함수는 배열 2개를 하나로 합쳐 새로운 배열을 만들어 돌려줌
console.log("concat()함수 예제");
console.log(array1.concat(array2));
console.log(array1);
console.log("push()함수 예제");
console.log(array1.push(000));
console.log(array1.sort());
console.log("배열의 길이 : " + array1.length);
//배열을 구분자를 이용하여 하나의 문자열로 생성
console.log("join()함수 예제");
console.log(array1.join(", "));
console.log(array1);
//배열을 해당하는 번지부터 잘라내기를 하여 잘려진 부분을 반환하고, 원본은 수정됨
console.log("splice()함수 예제");
console.log(array1.splice(1));
console.log(array1);
//배열을 해당하는 번지부터 잘라내기를 하여 잘려진 부분을 반환하고, 원본은 수정이 안됨
console.log("slice()함수 예제2");
console.log(array2.slice(1));
console.log(array2);
console.log("reverse()함수 예제");
console.log(array2.reverse());
console.log("sort()함수 예제");

console.log(array2.sort());
console.log("문자열 비교");
console.log("a>b :"+ ('a'>'b'));
console.log("a>aa : "+ ('a'>'aa'));
console.log("a>A : "+ ('a'>'A'));
console.log("123>7 : "+ ('123'>'7'));
// console.log(array['name']);
// console.log(array['age']);

// 메소드는 객체를 통해 호출 / 함수는 바로 호출
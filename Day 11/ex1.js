var count = 1;
function sayHello(){
	console.log("Hello world : "+ count);
	count++;
}
/*setTimeout 콜백 함수(비동기화)는 지정된 시간이 지나면 함수를 호출하는 함수
만약에 setTimeout이라는 함수가 동기화 함수이면 5초 뒤에 Hello world : 1이 출력이 되고 후에 
Hello callback function이 출력됨.
하지만 비동기화 함수이기 때문에 setTimeout 함수를 기다리지 않고
Hello callback function을 출력한 뒤 5초 뒤에 Hello world : 1이 출력됨
*/
setTimeout(sayHello, 5000);
console.log("Hello callback function");

var num = 1/0;
console.log(num);
console.log("num는 숫자? :" + !isNaN(num));
console.log("num은 무한대? :" + !isFinite(num));

var str = "123";
console.log(str);
console.log("str은 숫자? :" + !isNaN(str));
console.log("str은 무한대? :" + !isFinite(str));

str = "123a";
console.log(str);
console.log("str은 숫자? :" + !isNaN(str));
console.log("str은 무한대? :" + !isFinite(str));

var num1 = 1;
console.log(num1);
console.log("num는 숫자? :" + !isNaN(num1));
console.log("num은 무한대? :" + !isFinite(num1));

console.log("객체 예제");
var obj1 = {name : '강한나'};
obj1.add = '청주시';
obj1['age'] = 21;
console.log(obj1);
var obj2 = new Object();
obj2.name = '조아현';
obj2['add'] = '세종시';
obj2.age = 30;
console.log(obj2);

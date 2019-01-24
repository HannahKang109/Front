$(document).ready(function(){
    //.이 눌렸는지 확인하는 변수
    var pointCnt = 0;
    var op = '+'; //눌린 연산자를 저장하는 변수 / 초기값은 더하기로
    var isPushOp = false; //연산자가 눌린적이 있는지 없는지 확인하는 변수
    var input = $('#dataNum');
    var num1 = 0;
    /*임시 문자열이 필요한 이유는 =을 제외한 연산자를 연달아 누르면
    마지막에 누른 연산자가 출력되어야 하기 때문에 연산자를 누른 후 다음
    숫자가 눌리기 전까지의 문자열을 임시 문자열에 저장하고 이후 숫자를
    누르면 해당 문자열을 최종 문자열에 저장*/
    var str=""; //최종 문자열
    var strTmp=""; //임시 문자열

    $('.num').click(function(){
        var val = $(this).text();
        //연산자가 눌린 다음에 숫자를 누른 경우
        if(isPushOp){
          input.val('0');
          isPushOp = false;
        }
        if(val == "."){
            //.이 처음 눌린게 아니라면 작업을 종료하여 .이 인풋창에 찍히지 않도록 함
            if(pointCnt !=0) return;
            //.이 처음 눌리면 점이 눌린 횟수를 1로 만듦
            pointCnt++;
        }
        if(input.val() == "0")
            input.val(val);
        else
        //눌린 키와 input창에 있는 값을 이어 붙여서 출력
        // $('input').val(val);  <--이거는 숫자 하나씩만 가능
        input.val(input.val() + val);
        //숫자+연산자 누른 후 다시 숫자를 누를 때 최종연산자를 저장함
        str = strTmp;
    }); 
    $('.op').click(function(){
        pointCnt=0;
        var tmp = parseFloat(input.val());
        //숫자가 한번 눌리고, 연산자가 눌리면 || 등호가 눌리면
        if(!isPushOp || op == '='){
            switch(op){
                case '+': num1 = num1 + tmp; break;
                case '-': num1 = num1 - tmp; break;
                case 'x': num1 = num1 * tmp; break;
                case '/': num1 = num1 / tmp; break; 
                case '=': num1 = tmp; break;     
            }
            input.val(num1);
            //연산자가 처음 눌리면
            str = str + tmp;
        }
        op = $(this).text(); //마지막에 눌린 연산자가 실행되도록 하기 위해 바로 위괄호 안에 있던 걸 밖으로 뺀 것임
        strTmp = str + op;

        $('#dataStr').val(strTmp);
        if(op == "="){
            str="";
            strTmp="";            
        }
        //아래 코드가 여기에 있으면 등호 후에 위에 값이 다 사라지도록 함
        // $('#dataStr').val(strTmp);
        isPushOp = true;
        console.log(num1);
    }); 
}); 
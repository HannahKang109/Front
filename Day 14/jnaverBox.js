//html 구조를 다 실행한 후 js를 실행해라 - document 사용의 의미
$(document).ready(function(){
	$('.auto-search').click(function(){
		$('.auto-box').toggleClass('display-block');
		$('.auto-down').toggleClass('auto-up');
	});
	$('.item4').click(function(){
			//접기 또는 더보기 버튼을 클릭하면 메뉴에 있는 배열을 임시 배열에 저장
			menu();  //클릭하면 메뉴 보이고 다시 클릭하면 사라지기
			//선택된 사용자 메뉴의 값을 이용하여 체크박스의 체크 여부를 결정
			checkMenu();
			closeSubMenu();
			//체크 박스가 없는 라벨을 클릭 시 아무 동작을 하지 않도록 해주는 기능
			initCheck();
			//접기 버튼을 눌렀을 때 확인을 거치지 않은 선택된 메뉴들을 제거하는 작업 selectedMenu
			selectedMenu = menuArr2.slice();

	});
// 	$('.menu-close').click(function(){
// 			menu();
// });
	function menu(){
		$('.sub-menu').toggleClass('display-block');
		$('.item4').toggleClass('item4icon');
		$('.sub-menu-background').toggleClass('display-block');
};
	
	$('.item5').hover(function(){
		$('.real-search-box').toggleClass('display-block');
	});

	$('.api-list>li').hover(function(){
		// $('.api-list>li>a').toggleClass('display-none');
		$(this).children('a').toggleClass('display-none');
		// $('.api-list>li>div').toggleClass('display-block');
		$(this).children('div').toggleClass('display-block');
	});

		//div는 ul태그를 감싸는 객체의 선택자명
		//h는 marginTop의 높이
		//time은 이동하는데 걸리는 시간
    var ticker = function(div,h,time)  //div,h,time 이렇게 매개변수를 잘 주면 두번 함수를 안 쓰고도 실시간과 뉴스에 적용 가능
    {
			//setTimeout 일정 시간이 지난뒤에 function을 실행함
			//400밀리 세컨드 = 0.4초
        timer = setTimeout(function(){
            $(div+' li:first').animate( {marginTop: h}, time, function()
            {
							//여기서 this는 item5 클래스내에 ul태그 안에 있는 첫번째 li태그 객체
							//detach는 해당 객체를 제거한 후 해당 객체를 리턴한다.
							//부모.append(자식): 부모안에 있는 컨텐츠 뒤에 자식을 붙임
							//자식.appendTo(부모) : 부모안에 있는 컨텐츠 뒤에 자식을 붙임
								$(this).detach().appendTo(div+'>ul').removeAttr('style');
								//위와 아래 코드는 동일
								// $('.item5>ul').detach().appendTo('.item5 li:first').removeAttr('style');
						});
						ticker(div,h,time);  //재귀함수
						//밑에 2000은 화면에 보여지는 시간 / 머무는 시간 2초
				}, 2000); 
			};  //여기까지는 함수를 만든 거임
	ticker('.item5','-20px',400);  //이렇게 사용을 해줘야 적용 가능
	ticker('.news-content','-20px',600);


// 0번 이전 기능
      // $(document).on('click','.prev',function(){
      //   $('.item5 li:last').hide().prependTo($('.item5')).slideDown();
      //   clearTimeout(timer);
      //   item5();
      //   if($('#pause').text() == 'Unpause'){
      //     $('#pause').text('Pause');
      //   };
      // }); // 0번 기능 끝
	//box5-bottom이 6개인데 그 중 선택할 박스 번호를 의미하는 것이 index
	var index = 1;
	function displayBox5(i){
		//6개를 일단 다 안보이게 하고 => 기존에 보였던 박스를 보이지 않게 하기 위해
		$('.box5-bottom').removeClass('display-block');
		//선택한 i번째를 보여준다. eq는 0부터 시작하기 때문에 1을 빼줌
		$('.box5-bottom').eq(i-1).addClass('display-block');
		$('.box5-item2>b').text(i);
		$('.location').removeClass('display-inline-block');
		//선택한 i번째를 보여준다.
		$('.location').eq(i-1).addClass('display-inline-block');
	}
	displayBox5(index);
	$('.box5-next').click(function(){
		index++;
		//박스가 6개이기 때문에 7번째로 가려고 하면 첫번째로 보내줌
		if(index > 6){
			index = 1;
		}
		displayBox5(index);
	});

	$('.box5-prev').click(function(){
		index--;
		//박스가 6개이기 때문에 7번째로 가려고 하면 첫번째로 보내줌
		if(index <= 0 ){
			index = 6;
		}
		displayBox5(index);
	});	
		$('.rank-left').click(function(){
			$('.rank-lists').first().css('display','block');
			$('.rank-lists').last().css('display','none');
			$(this).css('background-color', '#fff');
			$('.rank-right').css('background-color', '#f9fafc');
		});
		$('.rank-right').click(function(){
			$('.rank-lists').last().css('display','block');
			$('.rank-lists').first().css('display','none');
			$(this).css('background-color', '#fff');
			$('.rank-left').css('background-color', '#f9fafc');
	 	});
			$('.rank-lists').first().css('display','block');
			$('.rank-lists').last().css('display','none');

				/*기존의 기본 메뉴 - 초기화를 하면 다시 기본 메뉴가 나와야 하므로*/
	var menuArr = ["dici", "newsi", "stocki", "dealeri", "mapi", "moviei", "musici", "booki", "webtooni"];
	$('.menu-setting').click(function(){
		createCheck();
		/*메뉴 설정 클릭 시 5개의 빈 박스를 보이기 위한 cnt */
		var cnt = 0;
		$('.item2-1').each(function(){
			/*기본 코드에 item2-1과 back-img와 각 아이콘 클래스가 있는데
				back-img와 아이콘 클래스를 제거하기 위해 prop 함수로 class를
				덮어쓰기 한다.*/
			if(menuArr2.length <= cnt){
				$(this).prop('class','item2-1');
				if(cnt > 4){
					$(this).addClass('display-none');
				}
			}
			cnt++;
		});
		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).removeClass('display-none');
		});
		subDetailMenu(1);
	});


// 1. 메뉴 설정을 클릭하면 서비스 전체보기, 메뉴 설정을 보이지 않게 하고, 확인, 취소 버튼을 추가
// 2. 확인 버튼을 누르면 선택한 메뉴들이 적용
// 3. 취소 버튼을 누르면 메뉴 설정 버튼을 누르기 전의 상태로 변경

// 문제점 
// 1. 메뉴 설정을 클릭하지 않아도 라벨을 클릭하면 박스가 변경
// 2. 메뉴 선택 후 닫기 버튼을 눌러서 초기 메뉴로 가고, 이후 메뉴 설정을 다시 클릭하면 이전에 선택된 메뉴가 체크되어 있음
	$('.menu-close').click(function(){
		selectedMenu = [];
		checkMenu();
		menu();
		closeSubMenu();
		initCheck();
	});
	$('.cancel').click(function(){
		initCheck();
		checkMenu();
		selectedMenu = menuArr2.slice();
		subDetailMenu(0);
		displayMenu();
		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).addClass('display-none');
		});

		var i = 0;
		//사용자 메뉴를 선정하지 않음
		if(menuArr2.length == 0){
			//변경전 : item2-1 또는 item2-1 back-img newsi
			//변경후 : item2-1 back-img dici
			$('.item2-1').each(function(){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr[i++]);												
			});
		}else{
			$('.item2-1').each(function(){
				if(menuArr2.length > i){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr2[i++]);
				}else{
					$(this).prop('class', 'item2-1 display-none');
				}												
			});				
		}
		$('.sub-menu-div input[type=checkbox]').each(function(){
			$(this).addClass('display-none');
		});
	});	
	//메뉴 설정에서 선택한 메뉴들을 저장하는 배열
	var selectedMenu = [];
	//실제 네이버에서 뿌려줄 메뉴
	var menuArr2=[];
	$('.sub-menu-div input[type=checkbox]').click(function(){
		//클릭한 체크박스의 value를 가져옴
		var check = $(this);
		//배열에 해당 체크박스의 value가 있는지를 확인
		var isContain = selectedMenu.indexOf(check.val());
		var maxSize = 5;
		//체크 박스의 value가 배열에 없고 배열의 길이가 5이면 해당 체크박스의 체크를 비 활성화
		if(isContain < 0){
			if(selectedMenu.length == maxSize){
			check.prop('checked', '');
		}
		//길이가 2가 아니면 해당 배열에 추가하고 해당 체크박스의 체크를 활성화
		else{
			selectedMenu.push(check.val());
			check.prop('checked', 'checked');
		}
	}
		//체크박스의 value가 배열에 있으면 배열에서 해당 문자열을 제거
		else{
			selectedMenu.splice(isContain, 1);  //1은 안써도 됨
		}
		var cnt = 0;
		$('.item2-1').each(function(){
			if(cnt < selectedMenu.length){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(selectedMenu[cnt++]);
			}
			else{
				$(this).prop('class','item2-1');
			if(cnt > 4)
				$(this).addClass('display-none');
				cnt++;						
				}												
			});
		});
		$('.ok').click(function(){
			menuArr2 = selectedMenu.slice();
			menu();
			closeSubMenu();
			initCheck();
		});

		$('.init').click(function(){
			menuArr2 = [];
			selectedMenu =[];
			alert('초기 설정으로 돌아갑니다.');
			menu();
			closeSubMenu();
			initCheck();
			checkMenu();
		});

		function subDetailMenu(toggle){
			if(toggle == 0){
				$('.all-service').removeClass('display-none');
				$('.menu-setting').removeClass('display-none');
				$('.ok').addClass('display-none');
				$('.init').addClass('display-none');
				$('.cancel').addClass('display-none');
		}else{
				$('.all-service').addClass('display-none');
				$('.menu-setting').addClass('display-none');
				$('.ok').removeClass('display-none');
				$('.init').removeClass('display-none');
				$('.cancel').removeClass('display-none');
			}
		}
		//menuArr2에서 저장된 값들만 check가 되도록 하는 함수//
		function checkMenu(){
			$('.sub-menu-div input[type=checkbox]').each(function(){
				$(this).prop('checked', '');
				for(var i = 0; i<menuArr.length; i++){
					if($(this).val() == menuArr2[i]){
						$(this).prop('checked', 'checked');
					}
				}
			});
		}

		function closeSubMenu(){
			//사용자가 선택한 메뉴 또는 기본 메뉴를 출력하는 기능
			displayMenu();
			//더보기 버튼 클릭 시 체크박스가 안보이도록 해주는 기능
			$('.sub-menu-div input[type=checkbox]').each(function(){
				$(this).addClass('display-none');
			});
			//subDetailMenu 함수는 더보기 버튼 클릭시 오른쪽 상단 보이는 메뉴를 결정하는
			//함수로 0이면 서비스 전체보기, 메뉴 설정이 보이고,
			//1이면 초기화, 확인, 취소가 보인다.
			subDetailMenu(0);

		}
		function initCheck(){
			$('.sub-menu-div label').each(function(){
				$(this).prop('for', '');
			});
		}
		function createCheck(){
			var i=0;
			var checkbox = $('.sub-menu-div input[type=checkbox]');
			$('.sub-menu-div label').each(function(){
				$(this).prop('for', checkbox.eq(i++).prop('id'));
			});
		}
		function displayMenu(){
			var i=0;
			if(menuArr2.length == 0){
				$('.item2-1').each(function(){
					$(this).prop('class','item2-1 back-img');
					$(this).addClass(menuArr[i++]);												
				});
			}else{
				$('.item2-1').each(function(){
					if(menuArr2.length > i){
					$(this).prop('class','item2-1 back-img');
					$(this).addClass(menuArr2[i++]);
					}else{
						$(this).prop('class', 'item2-1 display-none');
					}												
				});				
			}
		}
});

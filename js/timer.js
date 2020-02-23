
var pauseFl = true; // 타이머 작동 플래그
let startFl = false; //시작 플래그
var currentTime = "";
let firstName = "";
let secondName = "";
$(document).ready(function(){
  //정지 숨김
  $('#pause').hide();
  $('#Reset').hide();

  $('#start').click(function(){
    /****** 시작 ******/
    startFl = true;
    pauseFl = false; //타이머 플래그

		/********* Start 시간 설정 ********/
		let minute = $('#setIntervalMinute').val();
		let second = $('#setIntervalSecond').val();
    let millisecond = '0';

    if(minute == ""){
      $('#setIntervalMinute').val(parseInt(5));
      minute = $('#setIntervalMinute').val();
    }
    if(second == ""){
      $('#setIntervalSecond').val(parseInt(0));
      second = $('#setIntervalSecond').val();
    }

    if(minute >= 60){
      minute = 59
    }
    if(second >= 60){
      minute = parseInt(minute) + 1;
      second = 0;
    }

    firstName = $('#FirstName').val();
    secondName = $('#SecondName').val();

    if(firstName == ""){
      $('#FirstName').val("Player1");
      firstName = $('#FirstName').val();
    }

    if(secondName == ""){
      $('#SecondName').val("Player2");
      secondName =  $('#SecondName').val();
    }

		$('#timerCell').html('<span class="countTimeMinute"></span> : <span class="countTimeSecond"></span> : <sapn class="countTimeMilliSecond"></span>');
    $('#timerCell').css('color', '#fff');
    //시작 숨김 정지 보임
    $('#start').hide();
    $('#pause').show();

    //input 태그에서 span 태그로 바꿈
    $('#FirstNameTag').html("<span >"+ $('#FirstName').val() +"</span>");
    $('#SecondNameTag').html("<span >"+ $('#SecondName').val() +"</span>");
    //$('.firstPlayerBtnLog').html("<span class='firstPlayerBtnLog'>" + $('#FirstName').val() +" Log </span>");
    //$('.secondPlayerBtnLog').html("<span class='secondPlayerBtnLog'>" + $('#SecondName').val() +" Log </span>");

    $(".firstPlayerBtnLog").text(firstName +" Log");
    $(".secondPlayerBtnLog").text(secondName + " Log");

		$(".countTimeMinute").html(minute);
		$(".countTimeSecond").html(second);
    $(".countTimeMilliSecond").html(millisecond);


		/********* End 시간 설정 ********/

	var timer = setInterval(function () {
			if(pauseFl == false) {
        let _strMinute = minute <= 9 ? "0" + minute : minute;
        let _strSecond = second <= 9 ? "0" + second : second;
        let _strMillisecond = millisecond <= 9 ? "0" + millisecond : millisecond;

        $(".countTimeMinute").html(_strMinute);
        $(".countTimeSecond").html(_strSecond);
        $(".countTimeMilliSecond").html(_strMillisecond);
        currentTime = _strMinute + ":" + _strSecond + ":" + _strMillisecond; // 현재 타이머시간 텍스트
        //$(".countTimeMinute").html(minute);
        //$(".countTimeSecond").html(second);
        //$(".countTimeMilliSecond").html(millisecond);

					if(second == 0 && minute == 0 && millisecond ==0){
            Result();
						clearInterval(timer); /* 타이머 종료 */
            $('.start').remove();
            $('#End').remove();
            $('#cancle').remove();
            $('.firstPlayerBtnLog').remove();
            $('.secondPlayerBtnLog').remove();
            $('.center_btn').remove();
            $('#Reset').show();

					}else{
            millisecond --;
						// 초처리
            if(millisecond < 1){
              second--;
              millisecond = 99;
              //분처리
            }else if(second < 1){
              minute --;
              second = 59;
            }

						/*if(second < 0){
							minute--;
							second = 59;
					  }*/

					}
			}
		}, 10)

    $('#End').on('click', function(){
        Result();
        $(".countTimeMinute").html('00');
        $(".countTimeSecond").html('00');
        $(".countTimeMilliSecond").html('00');
        clearInterval(timer);
        $('.start').remove();
        $('#End').remove();
        $('#Reset').show();
        $('#cancle').remove();
        $('.firstPlayerBtnLog').remove();
        $('.secondPlayerBtnLog').remove();
        $('.center_btn').remove();
        //window.location.reload();
        startFl = true;
        pauseFl = true;
    });

    $('#Reset').on('click', function(){
      window.location.reload();
    });

}); /* millisecond  */

  //결과 값
  function Result(){
    var firstPlayerTotal = $('#firstPlayerTotalCell').html();
    var secondPlayerTotal = $('#secondPlayerTotalCell').html();

    var firstPlayerA = $('.point.firstPlayer.exclude#totalAmtA').html();
    var secondPlayerA = $('.point.secondPlayer.exclude#totalAmtA').html();

    var firstPlayerP = $('.point.firstPlayer.exclude#totalAmtP').html();
    var secondPlayerP = $('.point.secondPlayer.exclude#totalAmtP').html();

    let firstPlayer = $('#FirstNameTag').children().html();
    let secondPlayer = $('#SecondNameTag').children().html();

    if(firstPlayerTotal > secondPlayerTotal){
      alert(firstPlayer +"님이 "+firstPlayerTotal +"점으로 승리 하였습니다.");
    }else if(firstPlayerTotal < secondPlayerTotal){
      alert(secondPlayer +"님이 "+secondPlayerTotal +"점으로 승리 하였습니다.");
    }else if(firstPlayerA > secondPlayerA){
      alert(firstPlayer +"님이 advantage "+firstPlayerA +"점으로 승리 하였습니다.");
    }else if(firstPlayerA < secondPlayerA){
      alert(secondPlayer +"님이 advantage"+secondPlayerA +"점으로 승리 하였습니다.");
    }else if(firstPlayerP < secondPlayerP){
      alert(firstPlayer +"님이 penalty "+firstPlayerA +"점으로 승리 하였습니다.");
    }else if(firstPlayerP > secondPlayerP){
      alert(secondPlayer +"님이 penalty"+secondPlayerA +"점으로 승리 하였습니다.");
    }else{
      alert("심판이 승자를 정해주세요.");
    }
  }
});

function timerPause() {
  //flag 반전
  pauseFl = !pauseFl;

  //멈춰 있으면 재개 움직이면 일시 정지가 보임
  if(!pauseFl){
    $('#pause .btn_start_inner').html("PAUSE");
  }
  if(pauseFl){
    $('#pause .btn_start_inner').html("START");

  }

}

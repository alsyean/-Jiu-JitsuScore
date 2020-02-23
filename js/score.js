$(document).ready(function(){
  // 모바일에서 더블클릭 했을 때
  $('#wrap').on("dbclick",function(){
    return false;
  });

  //모바일에서 1초동안 누르고 있을때
  $("#wrap").on("taphold",function(){
    return false;
  });

  // 모바일에서 터치해서 움직였을 때
  $('#wrap').on('touchmove', function(e){
      x = e.originalEvent.touches[0].screenX;
      y = e.originalEvent.touches[0].screenY;
      // $('#touch_result').html('touchmove(x:'+x+', y:'+y+')');
      // console.log('x : ' + x + 'y : '+ y);
      return false;
    });


  $('#start').click(function(){
    /****** 시작 ******/
    startFl = true;
  });

  $('.firstPlayerGroup').hide();
  $('.secondPlayerGroup').hide();

  let prevPlusClickTarget = null;
  let prevPlusCheck = false;

  //----- 상단 영역 플레이어 점수판 바인딩
  $('.firstPlayer.plusBtn').on('click', function() {
    if(!pauseFl){
      let target = '.firstPlayer#' + $(this).data("obj");
      let amt = parseInt($(target).html()) + parseInt($(this).data("val"));

      let clickTarget = '.firstPlayer.'+ $(this).data("num");

      if(clickTarget != null){
        prevPlusCheck = true;
        if(!paOradFlag){
          $(prevPenaltyTarget).css('background','#ffede7');
        }else{
          $(prevPenaltyTarget).css('background','#f2efff');
        }
        prevPenaltyTarget = null;
        paOradFlag = null;
      }

      if(prevPlusCheck){
        $(prevPlusClickTarget).children().css('background','#f2f2f2');
        prevPlusCheck = false;
      }

      $(clickTarget).children().css('background', '#dedede');

      prevPlusClickTarget = clickTarget;

      $(target).html(amt <= 9 ? "0" + amt : amt);
      refreshTotalAmt(); //총계 새로고침

      history = target;
      historyScore = parseInt($(this).data("val"));
      cancleFlag = true;

      let innerText = "";
      // timer.js에서 밀리세컨드 단위로 업데이트되는 시간값입니다.
      // timer.js에서 firstPlayer를 가져옴
      innerText += "<p class = 'minusBtn'>" + firstName + " &nbsp;&nbsp;"+$(this).data("val") + "점 &nbsp;&nbsp;" +currentTime +"&nbsp;&nbsp;";
      innerText += " <span class='firstPlayer minusBtn'"+ " data-val=" +$(this).data('val') + " data-obj=" +$(this).data('obj') + " >&nbsp;&nbsp; X </span> </p>";
      $('.Player1.log').append( innerText);

      $('.firstPlayer.minusBtn').off(); // 바인딩 모두 취소
      $('.firstPlayer.minusBtn').on('click', function() {
        $(this).closest("p").remove();
        let target = '.firstPlayer#' + $(this).data("obj");
        let amt = parseInt($(target).html()) - parseInt($(this).data("val"));
        if(amt <0){
          amt = 0;
        }
        $(target).html(amt <= 9 ? "0" + amt : amt);
        refreshTotalAmt(); //총계 새로고침
      });

    }
    $('#cancle').css('background', '#b6997f');
  });

  //----- 하단 영역 플레이어 점수판 바인딩
  $('.secondPlayer.plusBtn').on('click', function() {
    if(!pauseFl){
      let target = '.secondPlayer#' + $(this).data("obj");
      let amt = parseInt($(target).html()) + parseInt($(this).data("val"));

      let clickTarget = '.secondPlayer.'+ $(this).data("num");

      if(clickTarget != null){
        prevPlusCheck = true;
        if(!paOradFlag){
          $(prevPenaltyTarget).css('background','#ffede7');
        }else{
          $(prevPenaltyTarget).css('background','#f2efff');
        }
        prevPenaltyTarget = null;
        paOradFlag = null;
      }

      if(prevPlusCheck){
        $(prevPlusClickTarget).children().css('background','#f2f2f2');
        prevPlusCheck = false;
      }

      $(clickTarget).children().css('background', '#dedede');

      prevPlusClickTarget = clickTarget;

      $(target).html(amt);
      refreshTotalAmt(); //총계 새로고침

      history = target;
      historyScore = parseInt($(this).data("val"));
      cancleFlag = true;

      let innerText = "";
      // timer.js에서 밀리세컨드 단위로 업데이트되는 시간값입니다.
      // timer.js에서 secondPlayer 가져옴
      innerText += "<p class = 'minusBtn'>" + secondName + " &nbsp;&nbsp;"+$(this).data("val") + "점 &nbsp;&nbsp;" +currentTime +"&nbsp;&nbsp;";
      innerText += " <span class='secondPlayer minusBtn'"+ " data-val=" +$(this).data('val') + " data-obj=" +$(this).data('obj') + " >&nbsp;&nbsp; X </span> </p>";
      $('.Player2.log').append( innerText );


      $('.secondPlayer.minusBtn').off(); // 바인딩 모두 취소
      $('.secondPlayer.minusBtn').on('click', function() {
        $(this).closest("p").remove();
        let target = '.secondPlayer#' + $(this).data("obj");
        let amt = parseInt($(target).html()) - parseInt($(this).data("val"));
        if(amt <0){
          amt = 0;
        }
        $(target).html(amt <= 9 ? "0" + amt : amt);
        refreshTotalAmt(); //총계 새로고침
      });

    }
    $('#cancle').css('background', '#b6997f');
  });

  let penaltyCheck = false;
  let prevPenaltyTarget = null;
  let paOradFlag = null;

  $('.firstPlayer.exclude').on('click',function(){
    if(!pauseFl){
      let target = '.firstPlayer#' + $(this).data("obj");
      let amt = parseInt($(target).html()) + 1;
      $(target).html(amt <= 9 ? "0" + amt : amt);

      if(!prevPlusCheck){
        $(prevPlusClickTarget).children().css('background','#f2f2f2');
        prevPlusClickTarget = null;
      }

      let clickTarget = '.firstPlayer.'+ $(this).data("penadv");

      if($(this).data("penadv") == "penalty_play1"){
        if(clickTarget != null){
          penaltyCheck = true;
        }

        if(penaltyCheck){
          $(prevPenaltyTarget).css('background','#ffede7');
          if(!paOradFlag){
              $(prevPenaltyTarget).css('background','#ffede7');
          }else{
            $(prevPenaltyTarget).css('background','#f2efff');
          }

          penaltyCheck = false;
        }

        $(clickTarget).css('background', '#ffcab7');

        prevPenaltyTarget = clickTarget;
        paOradFlag = false;
      }else{
        if(clickTarget != null){
          penaltyCheck = true;
        }

        if(penaltyCheck){
          $(prevPenaltyTarget).css('background','#f2efff');
          if(paOradFlag){
              $(prevPenaltyTarget).css('background','#f2efff');
          }else{
            $(prevPenaltyTarget).css('background','#ffede7');
          }
          penaltyCheck = false;
        }

        $(clickTarget).css('background', '#d7cfff');

        prevPenaltyTarget = clickTarget;

        paOradFlag = true;
      }



      history = target;
      historyScore = 1;
      cancleFlag = true;


      let innerText = "";
      innerText += "<p class = 'minusBtn'>" + firstName + " &nbsp;&nbsp;"+$(this).data("pa") + "획득 &nbsp;&nbsp;" +currentTime +"&nbsp;&nbsp;";
      innerText += " <span class='firstPlayer minusBtn'"+ " data-val=" +$(this).data('val') + " data-obj=" +$(this).data('obj') + " >&nbsp;&nbsp; X </span> </p>";
      $('.Player1.log').append( innerText );

      $('.firstPlayer.minusBtn').off(); // 바인딩 모두 취소
      $('.firstPlayer.minusBtn').on('click', function() {
        $(this).closest("p").remove();
        let target = '.firstPlayer#' + $(this).data("obj");
        let amt = parseInt($(target).html()) - parseInt($(this).data("val"));
        if(amt <0){
          amt = 0;
        }
        $(target).html(amt <= 9 ? "0" + amt : amt);
        refreshTotalAmt(); //총계 새로고침
      });


    }
    $('#cancle').css('background', '#b6997f');
  });

  $('.secondPlayer.exclude').on('click',function(){
    if(!pauseFl){
      let target = '.secondPlayer#' + $(this).data("obj");
      let amt = parseInt($(target).html()) + 1;
      $(target).html(amt <= 9 ? "0" + amt : amt);

      if(!prevPlusCheck){
        $(prevPlusClickTarget).children().css('background','#f2f2f2');
        prevPlusClickTarget = null;
      }

      let clickTarget = '.secondPlayer.'+ $(this).data("penadv");

      if($(this).data("penadv") == "penalty_play2"){
        if(clickTarget != null){
          penaltyCheck = true;
        }

        if(penaltyCheck){
          $(prevPenaltyTarget).css('background','#ffede7');
          if(!paOradFlag){
              $(prevPenaltyTarget).css('background','#ffede7');
          }else{
            $(prevPenaltyTarget).css('background','#f2efff');
          }

          penaltyCheck = false;
        }

        $(clickTarget).css('background', '#ffcab7');

        prevPenaltyTarget = clickTarget;
        paOradFlag = false;
      }else{
        if(clickTarget != null){
          penaltyCheck = true;
        }

        if(penaltyCheck){
          $(prevPenaltyTarget).css('background','#f2efff');
          if(paOradFlag){
              $(prevPenaltyTarget).css('background','#f2efff');
          }else{
            $(prevPenaltyTarget).css('background','#ffede7');
          }
          penaltyCheck = false;
        }

        $(clickTarget).css('background', '#d7cfff');

        prevPenaltyTarget = clickTarget;

        paOradFlag = true;
      }


      history = target;
      historyScore = 1;
      cancleFlag = true;

      let innerText = "";
      innerText += "<p class = 'minusBtn'>" + secondName + "&nbsp;&nbsp; "+$(this).data("pa") + "획득 &nbsp;&nbsp;"+currentTime +"&nbsp;&nbsp;";
      innerText += " <span class='secondPlayer minusBtn'"+ " data-val=" +$(this).data('val') + " data-obj=" +$(this).data('obj') + " >&nbsp;&nbsp; X </span> </p>";
      $('.Player2.log').append( innerText );

      $('.secondPlayer.minusBtn').off(); // 바인딩 모두 취소
      $('.secondPlayer.minusBtn').on('click', function() {
        $(this).closest("p").remove();
        let target = '.secondPlayer#' + $(this).data("obj");
        let amt = parseInt($(target).html()) - parseInt($(this).data("val"));
        if(amt <0){
          amt = 0;
        }
        $(target).html(amt <= 9 ? "0" + amt : amt);
        refreshTotalAmt(); //총계 새로고침
      });

    }
    $('#cancle').css('background', '#b6997f');
  });

  /****** 상하단 플레이어 마이너스 바인딩 ********/
  /*$('.firstPlayer.minusBtn').on('click', function() {
    let target = '.firstPlayer#' + $(this).data("obj");
    let amt = parseInt($(target).html()) + parseInt($(this).data("val"));
    if(amt <0){
      amt = 0;
    }
    $(target).html(amt);
    refreshTotalAmt(); //총계 새로고침
  });

  $('.secondPlayer.minusBtn').on('click', function() {
    let target = '.secondPlayer#' + $(this).data("obj");
    let amt = parseInt($(target).html()) + parseInt($(this).data("val"));
    if(amt <0){
      amt = 0;
    }
    $(target).html(amt);
    refreshTotalAmt(); //총계 새로고침
  });*/

  function refreshTotalAmt() {
    let totalAmt = 0; // 누적 변수 선언 및 초기화
    // 패널티와 어드밴티지는 총계 누적에서 제외됩니다. className:exclude
    $.each($('.firstPlayer.point').not('.exclude'), function(){
      let eachVal = parseInt($(this).html());
      totalAmt += eachVal;
    });
    $('#firstPlayerTotalCell').html(totalAmt <= 9 ? "0" + totalAmt : totalAmt);

    totalAmt = 0; // 누적 변수 초기화
    // 패널티와 어드밴티지는 총계 누적에서 제외됩니다. className:exclude
    $.each($('.secondPlayer.point').not('.exclude'), function(){
      let eachVal = parseInt($(this).html());
      totalAmt += eachVal;
    });
    $('#secondPlayerTotalCell').html(totalAmt <= 9 ? "0" + totalAmt : totalAmt);
  }

  let history = null;
  let historyScore = null;
  let cancleFlag = false;

  //최근 점수 올라간거 취소
  $('#cancle').on('click', function(){
    if(history == null || historyScore == null){
      alert("최근 점수가 없습니다.");
    }

    $('#cancle').css('background', '#a48364');
    $(prevPlusClickTarget).children().css('background','#f2f2f2');

    if(!paOradFlag){
        $(prevPenaltyTarget).css('background','#ffede7');
    }else{
      $(prevPenaltyTarget).css('background','#f2efff');
    }

    if(cancleFlag){
      let amt = parseInt($(history).html()) - historyScore;
      if(amt <0){
        amt = 0;
      }
      $(history).html(amt <= 9 ? "0" + amt : amt);

      let targetPlayer = history.includes('first') ? 'Player1' : 'Player2';

      $("."+targetPlayer+".log").children().last().remove();
      refreshTotalAmt(); //총계 새로고침
      cancleFlag = false;
    }
  });

});

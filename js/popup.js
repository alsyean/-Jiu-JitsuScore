
$(document).ready(function(){
  var $firstPlayerpanel = $(".firstPlayerPopup.popup_panel");

  var $secondPlayerpanel = $('.secondPlayerPopup.popup_panel')

  	let $panelContents = "";


      $(".firstPlayerBtnLog").on("click",function(e) {
        if(startFl){
            let targer = '.log.' + $(this).data('name');
            $panelContents = $firstPlayerpanel.find(targer);
                // 팝업 가운데 설정(가로)
                if ($panelContents.outerWidth() < $(document)
                    .width()) {
                  $panelContents.css("margin-left", "-"
                      + $panelContents.outerWidth() / 2
                      + "px");
                } else {
                  $panelContents.css("left", "0px");
                }

                // 팝업 가운데 설정(세로)
                if ($panelContents.outerHeight() < $(document)
                    .height()) {
                  $panelContents.css("margin-top", "-"
                      + $panelContents.outerHeight() / 2
                      + "px");
                } else {
                  $panelContents.css("top", "0px");
                }

                // 레이어 팝업 열기
                $firstPlayerpanel.fadeIn();
            }
        });

        $(".secondPlayerBtnLog").on("click",function(e) {
          if(startFl){
            let targer = '.log.' + $(this).data('name');
            $panelContents = $secondPlayerpanel.find(targer);
                    // 팝업 가운데 설정(가로)
                    if ($panelContents.outerWidth() < $(document)
                        .width()) {
                      $panelContents.css("margin-left", "-"
                          + $panelContents.outerWidth() / 2
                          + "px");
                    } else {
                      $panelContents.css("left", "0px");
                    }

                    // 팝업 가운데 설정(세로)
                    if ($panelContents.outerHeight() < $(document)
                        .height()) {
                      $panelContents.css("margin-top", "-"
                          + $panelContents.outerHeight() / 2
                          + "px");
                    } else {
                      $panelContents.css("top", "0px");
                    }

                    // 레이어 팝업 열기
                    $secondPlayerpanel.fadeIn();
            }
        });

        // 팝업 닫기 이벤트 정의
        $(".firstPlayerPopupClose").on("click", firstPlayerpopupClose);

        // 팝업 배경 클릭 이벤트 정의
        $firstPlayerpanel.find(".firstPlayerPopup.popup_bg").on("click", firstPlayerpopupClose);

        function firstPlayerpopupClose(e) {

          $firstPlayerpanel.fadeOut();

          // 이벤트 기본 동작 중단
          e.preventDefault();
        }

        // 팝업 닫기 이벤트 정의
        $(".secondPlayerPopupClose").on("click", secondPlayerpopupClose);

        // 팝업 배경 클릭 이벤트 정의
        $secondPlayerpanel.find(".secondPlayerPopup.popup_bg").on("click", secondPlayerpopupClose);

        function secondPlayerpopupClose(e) {

          $secondPlayerpanel.fadeOut();

          // 이벤트 기본 동작 중단
          e.preventDefault();
        }



});

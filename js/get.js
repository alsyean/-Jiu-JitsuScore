jQuery(function ($) {
    $.fn.getUrlParameter = function (sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    var FName = $.fn.getUrlParameter('FName');
    var SName = $.fn.getUrlParameter('SName');

    if(FName =="" || SName ==""){
      alert("이름을 입력해주세요");
		    window.history.back();
    }
    console.log("FName : "+ FName);
    console.log("SName : "+ SName);

    $("#Fname").text(FName);
    $("#Sname").text(SName);
});

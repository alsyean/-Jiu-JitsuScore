$(document).ready(function(){
  $("#check").click(function(){
    var FName = $("#FName").val();
    var SName = $("#SName").val();

    if(FName == " "){
      alert("이름을 입력해주세요");
    }else if(SName == " "){
      alert("이름을 입력해주세요");
    }else{
      url = "score.html?FName="+FName+"&SName="+SName;
      $(location).attr('href',url);
    }
  });

  $("#check").hover(function(){
    $("#check").html("<i class='fas fa-check-circle fa-2x' id='check'></i>");
  },
  function(){
    $('#check').html("<i class='far fa-check-circle fa-2x' id='check'></i>");
  }
);

});

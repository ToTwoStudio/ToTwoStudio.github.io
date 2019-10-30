$(document).ready(function(){
    if($.cookie("isComplete")){
        var comData = $.cookie("comData");
        $("#form-subject").hide();
        $("#form-grade").show();
        $("input").prop("disabled", true);
        $(".myname").html(comData[0]);
        $(".mygrade").html(comData[1]);
    }
});

function check(){
    var username = $("#username").val();
    var grade = 60 ;
    var answer = ["B","C","C","B","C","D","A","C","C","D","B","C"];
    var index = 0;
    $("input[type=radio]:checked").each(function() {
        item = $(this).val();
        if(answer[index]!=item){
            grade = grade - 4;
            $("#subject" + (index + 1) + " .card-body").removeClass("bg-success-greed");
            $("#subject" + (index + 1) + " .card-body").addClass("bg-error-red");
        }else{
            $("#subject" + (index + 1) + " .card-body").removeClass("bg-error-red");
            $("#subject" + (index + 1) + " .card-body").addClass("bg-success-greed");
        }
        index ++;
    })
    var subject131 =  $("#subject131").val();
    if(subject131==8){
        $("#subject131").css({ background : "rgba(118, 245, 101, 0.5) "});
    }else{
        grade = grade - 4;
        $("#subject131").css({ background : "rgba(255, 129, 129, 0.5) "});
    }
    var subject132 =  $("#subject132").val().split(" ");
    var answer132 = ["byte","short","int","long","float","double","char","boolean"];
    var allrught = true;
    $.each(answer132,function(index,value){
        var index = $.inArray(value, subject132);
        if(index<0){
            grade = grade - 1;
            allrught = false;
        }
    });
    if(allrught){
        $("#subject132").css({ background : "rgba(118, 245, 101, 0.5) "});
    }else{
        $("#subject132").css({ background : "rgba(255, 129, 129, 0.5) "});
    }
    $.cookie("isComplete", true);
    $.cookie("comData", [username,grade]);
    $("#form-subject").hide();
    $("#form-grade").show();
    $(".myname").html(username);
    $(".mygrade").html(grade);
    return false;
 } 

 function showError(){
    $("#form-subject").show();
    $("input").prop("disabled", true);
}
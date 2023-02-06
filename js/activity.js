

$(document).ready(function(){


$("td").click(function(){
    var content=$(this).text();
    console.log(content);
    if (content != "Not Available"){
        $(this).toggleClass("tdhighlight");
    }

if($(this).hasClass('tdhighlight')){
   console.log($(this).attr("class"));
    $("#displaySelected").css("visibility","visible");
    $("#displaySelected").css("margin-top","2em");
    $('#result').append("<p>"+content+"</p>");
}else{
    $('#result p:contains('+content+')').remove();
    if($('#result').has('p').length==false){
        $('#displaySelected').css("visibility","hidden");
        $('#displaySelected').css("margin-top","0");}

    };

});


});






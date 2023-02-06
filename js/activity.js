

$(document).ready(function(){


$(".selectable").click(clickedCell);

function clickedCell(){
    var selectedText=$(this).attr("id");
    
    var selectedId="#"+selectedText;
   
    $(selectedId).toggleClass("clickedCell");
};


});

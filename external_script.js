'use strict';


//演習2


$.fn.clickToggle = function(a,b){
    return this.each(function(){
        var clicked = false;
        $(this).on("click",function(){
            clicked=!clicked;
            if(clicked){
                return a.apply(this,arguments);
        }
        return b.apply(this,arguments);
    });
});
};

$("#button").clickToggle(function(){
    $("#text").text("山本優");
    $("#text").css("color", "blue");
}, function(){
    $("#text").css("color", "red");
});





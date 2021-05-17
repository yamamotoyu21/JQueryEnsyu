'use strict';


//演習2


//交互に表示するためのclickToggle関数を作る。
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

//ClickToggle関数を用いて交互にボタンを押した時の挙動をコーディング。
$("#button").clickToggle(function(){
    $("#text").text("山本優");
    $("#text").css("color", "blue");
}, function(){
    $("#text").css("color", "red");
});

//演習3

$(function(){
    /*selectボックスの洗濯が変更されたら中の処理を実行 */
$("#interest-parent").on("change", function(){
    /**v選択したselectボックスのvalue値を取得、valに代入 */
    let val = $(this).val();
    switch(val){
        case "1":
        $("#interest-child1").show();
        $("#interest-child2").hide();
        break;
        case "2":
        $("#interest-child1").hide();    
        $("#interest-child2").show();
    }
        

    });
});






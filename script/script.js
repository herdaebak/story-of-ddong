$(function(){

    var x = 0;
    setInterval (function(){
        if (x<2) {x++;}
        else {x=0;};
        var sp = x*(-800)+"px";
        $(".slideLeft").animate({left:sp},400);
    },3000);
});
/**
 * Created by RQ on 2017/7/18.
 */
$(document).ready(function () {
    $("#start").click(function () {
        $("p").animate({left:'150px'},2000);
        $("p").animate({fontSize:'3em'},2000);
    });
    $("#stop").click(function () {
        $("p").stop();
    });
    $("#stop1").click(function () {
        $("p").stop(true);
    });
    $("#stop2").click(function () {
        $("p").stop(true,true);
    })
});
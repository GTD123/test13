/**
 * Created by RQ on 2017/7/18.
 */
$(document).ready(function () {
    $("#btn").click(function () {
        $("#p1").stop();
    });
    $("#p2").click(function () {
       $("#p1").slideToggle(2000);
    });
});
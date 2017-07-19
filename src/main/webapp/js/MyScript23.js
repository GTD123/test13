/**
 * Created by RQ on 2017/7/18.
 */
$(document).ready(function () {
    $("button").click(function () {
        $("#p").css("background-color","red").slideUp(2000).slideDown(2000,function () {
            alert("完了");
        });
    });
});
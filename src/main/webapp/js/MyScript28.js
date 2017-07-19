$(document).ready(function () {
    $("#btn1").click(function () {
        $("#p1").text(function (i,origintext) {
            return "old text:"+origintext+"new text:"+"hello,world"+"("+i+")";
        });
    });
    $("#btn2").click(function () {
        $("#p2").html(function (i,origintext) {
                return "old text:"+origintext+"new text:"+"hello,home"+"("+i+")";
        });
    });
});
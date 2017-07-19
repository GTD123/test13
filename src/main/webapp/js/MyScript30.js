$(document).ready(function () {
    $("button").click(function () {
        $("#aa").attr("href",function (i,origin) {
             return "http://news.chinaxiaokang.com/shehuipindao/minsheng/20170717/219546.html";
        });
    });
});
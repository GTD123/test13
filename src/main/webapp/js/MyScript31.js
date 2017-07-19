$(document).ready(function () {
    $("#btn1").click(function () {
        $("p").after("<b>最佳的新档案</b>");
    });
    $("#btn2").click(function () {
        $("ol").before("<li>hellowolrd</li>");
    });
});
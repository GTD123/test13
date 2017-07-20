$(document).ready(function () {
    $("#ex").click(function () {
        $(this).parents().hide(2000,function () {
            alert("xiaoshile");
        });
    });
});
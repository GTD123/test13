$(document).ready(function () {
    $("h2").nextUntil("span").css({
        "border":"solid 2px red",
        "color":"red"
    });
});
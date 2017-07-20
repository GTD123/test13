$(document).ready(function () {
    // $("span").parents("ul,div").css({
    //     "border":"solid 1px red",
    //     "color":"red"
    // })
    $("span").parentsUntil("div").css({
        "border":"solid 2px red",
            "color":"red"
    })
});
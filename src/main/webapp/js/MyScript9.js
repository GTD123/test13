/**
 * Created by RQ on 2017/7/17.
 */
$(document).ready(function () {
    $(".ex.hide").click(function () {
        $(this).parents(".ex").hide("slow");
    });
});
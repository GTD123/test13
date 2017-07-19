/**
 * Created by RQ on 2017/7/18.
 */
$(document).ready(function () {
    $(".demo .btn").click(function () {
        $(this).parents(".demo").hide("slow");
    });
});
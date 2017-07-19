/**
 * Created by RQ on 2017/7/18.
 */
$(document).ready(function () {
    $("button").click(function () {
        $("p").animate({
            left:'250px',
            width:'+=150px',
            height:'+=150px',
            opacity:'0.5'
        },2000)
    }); 
});
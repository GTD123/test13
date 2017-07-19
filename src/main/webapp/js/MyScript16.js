/**
 * Created by RQ on 2017/7/18.
 */
$(document).ready(function () {
   $("button").click(function () {
       $("#div1").fadeTo(2000,0.28);
       $("#div2").fadeTo("slow",0.80);
       $("#div3").fadeTo(3000,0.55);
   });
});
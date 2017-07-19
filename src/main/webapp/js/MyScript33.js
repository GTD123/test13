$(document).ready(function () {
   $("#btn1").click(function () {
       $("img").before("hello");
   }); 
   $("#btn2").click(function () {
       $("img").after("hahaha");
   });
});
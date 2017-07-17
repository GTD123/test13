/**
 * Created by RQ on 2017/7/14.
 */
    function checkCook() {
    if(navigator.cookieEnabled==true){
        alert("已启cook");
    }else{
        alert("未启用cook");
    }
    var  x = document.getElementById("input");
    x.value = x.value.toUpperCase();
}

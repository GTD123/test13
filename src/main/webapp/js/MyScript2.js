/**
 * Created by RQ on 2017/7/14.
 */
var x = document.getElementById("demo");
var y = x.getElementsByTagName("p");
document.write("我想打印的是："+ y[0].innerHTML);
document.getElementById("demo").getElementsByTagName("p")[0].innerHTML = "hello";
document.getElementById("haizeiwang").src = "../img/longzhu.png";
document.getElementById("shi").style.color="#ff0000";
document.getElementById("shi").style.fontFamily="Arial";
document.getElementById("shi").style.fontSize="larger";

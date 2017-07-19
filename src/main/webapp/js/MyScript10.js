/**
 * Created by RQ on 2017/7/18.
 */
function hello() {
    var xmlhttp;
    if(xmlhttp.XMLHttpRequest){
        xmlhttp  = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","/ajax/test1.txt",false);
    xmlhttp.send();
    document.getElementById("demo").innerHTML = xmlhttp.responseText;
}

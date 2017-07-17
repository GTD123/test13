/**
 * Created by RQ on 2017/7/14.
 */
var para1 = document.createElement("p");
var node1 = document.createTextNode("商女不知亡国恨");
para1.appendChild(node1)

var para2 = document.createElement("p");
var node2 = document.createTextNode("隔江犹唱后庭花");
para2.appendChild(node2)


var elment = document.getElementById("demo");
elment.appendChild(node1);
elment.appendChild(node2);

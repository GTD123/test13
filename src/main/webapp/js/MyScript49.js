$(document).ready(function () {
    $("button").click(function () {
            $("div").load("../txt/Test2.txt",function (responseTxt,statusTxt,xhr) {
                if(statusTxt=="success")
                    alert(statusTxt+"外部内容加载成功！");
                if(statusTxt=="error")
                    alert(statusTxt+": "+xhr.status+": "+xhr.statusText);
            })
    });
});
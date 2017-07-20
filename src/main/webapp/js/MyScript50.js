$(document).ready(function () {
        $("button").click(function () {
            $.get("../view/Test1.jsp",function (data,status) {
                alert(data+status);
            })
        });
})
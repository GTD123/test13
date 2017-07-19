/**
 * Created by RQ on 2017/7/18.
 */
    $(document).ready(function () {
        $("button").click(function () {
            $("div").hide(2000,function () {
                alert("我不见了");
            });
        }); 
    });
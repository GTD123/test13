$(document).ready(function () {
    function hello() {
        var txt1 = "<p>nihao</p>";
        var txt2 = $("<p></p>").text("haha");
        var txt3 = document.createElement("p");
        txt3.innerHTML = "woyehao";
        $("img").after(txt1,txt2,txt3);
    }
});


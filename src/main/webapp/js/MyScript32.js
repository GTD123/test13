    function zhuijia() {
        var txt1 = "<p>text1.</p>";
        var txt2 = $("<p></p>").text("text2.");
        var txt3 = document.createElement("p");
            txt3.innerHTML = "text3.";
            $("body").append(txt1,txt2,txt3);
    }
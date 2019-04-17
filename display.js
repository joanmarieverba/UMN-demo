"use strict"

$(document).ready(function () {
    $(".borders").click(function () {
        $(".picture").css({"border": "9px dotted #c905c6", "border-image-source": "linear-gradient(10deg, #fe01f5 0%, #2e113d 100%)", "border-image-slice": "9"});
    });
});




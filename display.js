"use strict"

//change the border
$(document).ready(function () {
    $(".borders").click(function () {
        $(".picture").css({"border": "9px dotted #c905c6", "border-image-source": "linear-gradient(10deg, #fe01f5 0%, #2e113d 100%)", "border-image-slice": "9"});
    });
});

//reverse the order

$(document).ready(function () {
    $(".reverse").click(function () {
        $("#img1").attr('src', "images/cat6.jpg");
        $("#img2").attr('src', "images/cat5.jpg");
        $("#img3").attr('src', "images/cat4.jpg");
        $("#img4").attr('src', "images/cat3.png");
        $("#img5").attr('src', "images/cat2.png");
        $("#img6").attr('src', "images/cat.png");
    });
});

//note: yes, I know I should have used arr.reverse() and forEach above
//for some reason I cannot fathom, my system was throwing errors when I used them
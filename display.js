"use strict"

//change the border
$(document).ready(function () {
    $(".borders").click(function () {
        $(".picture").css({"border": "9px dotted #c905c6", "border-image-source": "linear-gradient(10deg, #fe01f5 0%, #2e113d 100%)", "border-image-slice": "9"});
    });
});

//reverse the order

//reference image container
const imgContainer = $('#container');

//reference reverse button
const reverseButton = $('.reverse');

//search container, add images to array
let images = $(imgContainer).find('img');

//check the images array
console.log('images: ', images);

//handle the click
$(document).ready(function () {
    $(".reverse").click(function () {
        $("#container").empty;
        images.forEach(function (index) {
            console.log (index)
        });

    });
});


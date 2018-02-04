$(function () {
    //BEGIN ION RANGE SLIDER
    $("#rangeslider").ionRangeSlider({
        min: 0,
        max: 5000,
        from: 1000,
        to: 4000,
        type: 'double',
        step: 1,
        prefix: "$",
        prettify: false,
        hasGrid: false
    });
    //END ION RANGE SLIDER

});
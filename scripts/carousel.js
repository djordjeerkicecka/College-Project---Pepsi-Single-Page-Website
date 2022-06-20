var slides = $(".slide");
var dots = $(".dot");

var CurrentIndex = 0;

function ShowSlide(NextIndex) {

    for(var i = 0; i < slides.length; i++)
        $(slides[i]).removeClass("slide-active");

    for(var i = 0; i < dots.length; i++)
        $(dots[i]).removeClass("dot-active");

    $(slides[NextIndex]).addClass("slide-active");
    $(dots[NextIndex]).addClass("dot-active");
}

function NextSlide(Modifier) {
    CurrentIndex += Modifier;

    if(CurrentIndex < 0) 
        CurrentIndex = slides.length - 1;

    if(CurrentIndex == slides.length)
        CurrentIndex = 0;

    ShowSlide(CurrentIndex);
}
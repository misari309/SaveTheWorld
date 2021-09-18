let sky_background = document.getElementById("sky_background");
let mountains_background = document.getElementById("mountains_background");
let trees_background = document.getElementById("trees_background");

window.addEventListener('scroll', function(){
    var scroll_value = window.scrollY;

    sky_background.style.top = scroll_value * 0.5 + "px";
    mountains_background.style.top = scroll_value * 0.3 + "px";
})

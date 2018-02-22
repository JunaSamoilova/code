//slider
var slides = document.getElementsByClassName('slide');
var dot = document.getElementsByClassName('dot');
var c = 0;
var timer = setInterval(autoChange, 10000);
window.onload = timer; 
function dotSlideChange(i) {
    for (var a = 0; a < slides.length; a++) {
            slides[a].classList.remove('slide-active');
            dot[a].classList.remove('dot-active');
    }
    slides[i].classList.toggle('slide-active');
    dot[i].classList.toggle('dot-active');
    clearInterval(timer);
    setInterval(autoChange, 10000);
}
function autoChange() {
    for (var a = 0; a < slides.length; a++) {
        slides[a].classList.remove('slide-active');
        dot[a].classList.remove('dot-active');
    }
    slides[c].classList.toggle('slide-active');
    dot[c].classList.toggle('dot-active');
    c++;
    if (c == 4 ) {
        c = 0;
    }
    return c;
}

var next = document.getElementById('next');
var prev = document.getElementById('prev');

next.addEventListener('click', nextArrow);
prev.addEventListener('click', prevArrow);

function index() {
    for(var b = 0; b < slides.length; b++) {
        if (slides[b].classList.contains("slide-active")) {
            return b;
            break;
        }
    }
}
function nextArrow() {
    var numN = index();
    if (numN == 3) {
        slides[0].classList.add("slide-active");
        slides[3].classList.remove("slide-active");
        dot[0].classList.add("dot-active");
        dot[3].classList.remove("dot-active");
    } else {
        slides[numN+1].classList.add("slide-active");
        slides[numN].classList.remove("slide-active");
        dot[numN+1].classList.add("dot-active");
        dot[numN].classList.remove("dot-active");
    }
    clearInterval(timer);
    setInterval(autoChange, 10000);
}
function prevArrow() {
    var numP = index();
    if (numP == 0) {
        slides[3].classList.add("slide-active");
        slides[0].classList.remove("slide-active");
        dot[3].classList.add("dot-active");
        dot[0].classList.remove("dot-active");
    } else {
        slides[numP-1].classList.add("slide-active");
        slides[numP].classList.remove("slide-active");
        dot[numP-1].classList.add("dot-active");
        dot[numP].classList.remove("dot-active");
    }
    clearInterval(timer);
    setInterval(autoChange, 10000);
}
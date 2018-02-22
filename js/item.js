var show = document.getElementById('show');

var mini1 = document.getElementById('thumbnail1');
var mini2 = document.getElementById('thumbnail2');
var mini3 = document.getElementById('thumbnail3');

mini1.addEventListener('click', changePhoto1);
mini2.addEventListener('click', changePhoto2);
mini3.addEventListener('click', changePhoto3);

function changePhoto1 () { 
   show.classList.remove('thumb2', 'thumb3');
   show.classList.add('thumb1')
   mini2.classList.remove('thumbnail-active');
   mini3.classList.remove('thumbnail-active');
   mini1.classList.add('thumbnail-active')
}
function changePhoto2 () { 
    show.classList.remove('thumb1', 'thumb3');
    show.classList.add('thumb2')
    mini1.classList.remove('thumbnail-active');
    mini3.classList.remove('thumbnail-active');
    mini2.classList.add('thumbnail-active')
 }
 function changePhoto3 () { 
    show.classList.remove('thumb1', 'thumb2');
    show.classList.add('thumb3')
    mini1.classList.remove('thumbnail-active');
    mini2.classList.remove('thumbnail-active');
    mini3.classList.add('thumbnail-active')
 }
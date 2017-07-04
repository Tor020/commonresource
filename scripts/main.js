
let main = {
hideshow:function(){
const ext = document.getElementById('extra');
const extdiv = document.querySelector('.extra');
const css = document.getElementById('css');
const cssdiv = document.querySelector('.css');
const util = document.getElementById('utilities');
const utildiv = document.querySelector('.utilities');
const dispjs = document.getElementById('dispjs');
const dispjsdiv = document.querySelector('.displayjsdiv');
const dispjsnavdiv = document.querySelector('.jsnavigation');
const c2Steal = document.getElementById('c2Steal');
const c2Stealdiv = document.querySelector('.c2Steal');
const disabAnchor = document.querySelector('.st');
const todo = document.querySelector('.todo');

//event delegation may be used here
ext.addEventListener('click', function(){
// extdiv.classList.toggle('extra');
extdiv.classList.toggle('flex-extra');
})
css.addEventListener('click', function(){
// cssdiv.classList.toggle('css');
cssdiv.classList.toggle('flex-css');
})
util.addEventListener('click', function(){
// utildiv.classList.toggle('utilities');
utildiv.classList.toggle('flex-util');
})
c2Steal.addEventListener('click', function (e) {
  c2Stealdiv.classList.toggle('flex-c2Steal');
});

dispjs.addEventListener('click', function(){
dispjsdiv.classList.toggle('displayjsdiv');
dispjsnavdiv.classList.toggle('jsnavigation');
})

disabAnchor.addEventListener('click', function (e) {
  e.preventDefault();
});
todo.addEventListener('click', function (e) {
  todo.style.display='none';
});


  }
}

main.hideshow();
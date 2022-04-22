'use strict';

const box = document.querySelector('.box'),
  btn = document.querySelector('button');

// const width = box.clientWidth;
// const high = box.clientHeight;

// const width = box.offsetWidth;
// const high = box.offsetHeight;

const width = box.scrollWidth;
const high = box.scrollHeight;


console.log(width, high);


btn.addEventListener('click', () => {
  box.style.height = box.scrollHeight + 'px';
  //console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);


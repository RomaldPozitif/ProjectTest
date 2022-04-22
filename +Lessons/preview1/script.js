'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 500;

function changeParams(elem, h, w) {
  elem.style.height = `${h ?? 800}px`;
  elem.style.width = `${w ?? 800}px`;
  elem.innerHTML = (h ?? 200) * (w ?? 200)
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;

console.log(userName ?? userKey ?? 'roma');


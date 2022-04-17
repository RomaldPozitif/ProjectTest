'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: red; width: 500px';

btns[1].style.borderRadius = '100%';
circle[0].style.background = 'red';


// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'rose';
// };
//==
hearts.forEach(item => {
  item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
//const text = document.createTextNode('Russians pidars');

div.classList.add('black');

wrapper.append(div);
//wrapper.appendChild(div);
//wrapper.prepend(div);

//hearts[0].before(div);
// hearts[0].after(div);
//wrapper.insertBefore(div, hearts[1]);
// circle[0].remove();

//hearts[0].replaceWith(circle[0]);

div.innerHTML = "<h4>Hello world!!!</h4>"; // add Text in figure
//div.textContent = "<h1>Hello pidars<h1>";

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); //insert before/after    beforeend, afterend








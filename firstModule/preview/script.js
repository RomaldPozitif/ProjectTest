const btns = document.querySelectorAll('button'),
  overlay = document.querySelector('.overlay'),
  link = document.querySelector('a');


// btn.onclick = function () {
//   alert('Click');
// };


let i = 0;
const del = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', del);
  // }

};

btns.forEach(btn => {
  btn.addEventListener('click', del);
});

overlay.addEventListener('click', del);


link.addEventListener('click', (event) => {
  event.preventDefault();                         //браузер стопе
  console.log(event.target);
});






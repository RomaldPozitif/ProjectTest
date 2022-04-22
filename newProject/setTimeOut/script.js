// const timeId = setTimeout(function (text) {
//   console.log(text);
// }, 2000, 'hello');

const btn = document.querySelector('.btn');
let timeId;
let i = 0;

// btn.addEventListener('click', () => {
//   //const timeId = setTimeout(logger, 2000);
//   timeId = setInterval(logger, 2000);
// });
// clearInterval(timeId);



// function logger() {
//   i === 3 ? clearInterval(timeId) :
//     console.log('text');
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("Hello");
//   id = setTimeout(log, 500);
// }, 500);


function myEnimation() {
  const elem = document.querySelector('.box');
  let pos = 0;
  const id = setInterval(frame, 1);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myEnimation);

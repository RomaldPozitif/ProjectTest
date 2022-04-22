// 'use strict';

// // const dateNow = new Date();
// // console.log(dateNow);

// const now = new Date(2020, 5, 1, 20);
// console.log(now);

// const now = new Date();
// console.log(now.getFullYear());

const now = new Date(2022 - 04 - 17);
//new Date.parse('2022-04-17');

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

//console.log(now.getTimezoneOffset());
//console.log(now.getTime());

// console.log(now.setHours(18));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();
console.log(`Цикл отработал за ${end - start} милисекунд`);


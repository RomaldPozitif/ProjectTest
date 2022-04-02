// // // // "use strict";

// // // // // Function
// // // // // let num = 20;

// // // // // function showFirstMessage(text) {
// // // // //   console.log(text);
// // // // //   let num = 10;
// // // // // }

// // // // // showFirstMessage("hello");
// // // // // console.log(num);

// // // // // // function calc(a, b) {
// // // // // //   return a + b;
// // // // // // }

// // // // // // console.log(calc(4, 3));

// // // // // function ret() {
// // // // //   let num = 50;
// // // // //   return num;
// // // // // }

// // // // // const anotherNum = ret();

// // // // // console.log(anotherNum);


// // // // // const logger = function() {
// // // // //   console.log('hello');
// // // // // };
// // // // // logger();


// // // // // const calc = (a, b) => a + b;



// // // // //-----------------------------------------------------------------------------------------------------


// // // // //string and number

// // // // // const str = `text and not right`;


// // // // // //console.log(str.slice(3, 6));

// // // // // //console.log(str.substr(4, 6));

// // // // // const num = 111.2;

// // // // // console.log(Math.round(num));

// // // // // const test = '12.2px';

// // // // // console.log(parseFloat(test));


// // // // //-----------------------------------------------------------------------------------------------------
// // // // //callback
// // // // // function first() {
// // // // //   //Do something
// // // // //   setTimeout(function () {
// // // // //     console.log(1);
// // // // //   }, 500);
// // // // // }

// // // // // function second() {
// // // // //   console.log(2);
// // // // // }

// // // // // first();
// // // // // second();

// // // // // function learnJS(lang, callback) {
// // // // //   console.log(`im learn ${lang}`);
// // // // //   callback();
// // // // // }

// // // // // function done() {
// // // // //   console.log("im done");
// // // // // }


// // // // // learnJS('JavaScript', done);

// // // // //-----------------------------------------------------------------------------------------------------
// // // // //Object

// // // // const options = {
// // // //   name: `test`,
// // // //   width: 1024,
// // // //   height: 1024,
// // // //   colors: {
// // // //     border: `black`,
// // // //     bg: `red`
// // // //   },
// // // //   makeTest: function() {
// // // //     console.log(Object.keys(options));
// // // //   }
// // // // };

// // // // options.makeTest();

// // // // const {border, bg} = options.colors;
// // // // console.log(border);
// // // // //console.log(Object.keys(options).length);

// // // // // for (let key in options) {
// // // // //   if(typeof(options[key]) === 'object') {
// // // // //     for (let i in options[key]) {
// // // // //       console.log(`Свойство ${i}, имеет значения ${options[key][i]}`);
// // // // //     }
// // // // //   } else {
// // // // //     console.log(`Свойство ${key}, имеет значения ${options[key]}`);
// // // // //   }
// // // // // }

// // // // //-----------------------------------------------------------------------------------------------------
// // // //Array
// // // const arr = [1, 2, 3, 4];

// // // arr.pop();
// // // arr.push(10);

// // // console.log(arr);

// // // // for (let i = 0; i < arr.length; i++ ) {
// // // //   console.log(arr[i]);
// // // // }

// // // // for(let value of arr) {
// // // //   console.log(value);
// // // // }

// // // // arr.forEach(function(item, i) {
// // // //   console.log(`${i}: ${item} inside array` );
// // // // });

// // // const str = prompt('', '');

// // // const products = str.split(', ');
// // // arr.sort();
// // // console.log(arr.sort());
// // // console.log(products.join('; '));


// // // function compareNum ( a, b) {
// // //   return a - b;
// // // }

// // // // //-------------------------------------------------------------------------------------------


// // function copy(mainObj) {
// //   let objCopy = {};

// //   let key;
// //   for(key in mainObj) {
// //     objCopy[key] = mainObj[key];
// //   }

// //   return objCopy;
// // }



// // const numbers = {
// //   a: 1,
// //   b: 2,
// //   c: {
// //     x: 7,
// //     y: 4
// //   }
// // };

// // const newNumbers = copy(numbers);
// // newNumbers.a = 10;
// // console.log(newNumbers);

// // console.log(numbers);


// // const add = {
// //   d: 17,
// //   e: 20
// // };

// // console.log(Object.assign(numbers, add));  //create independense obj



// const oldArray = [`a`, `b`, `c`];
// const newArray = oldArray.slice();

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// const num =[2, 5, 7];

// log(...num);


// const array = ['a', 'b'];

// const newArrays = [...array];

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = {...q};

// newObj.one = 2;
// console.log(newObj);
// console.log(q);

//-----------------------------------------------------------------------------------------------------------------------
//OOP

let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(strObj);

console.dir([1, 2, 3]);


const soldier = {
  health: 400,
  armor: 100
};

let jonh = Object.create(soldier);



//Object.setPrototypeOf(jonh, soldier); //добавляем прототип к готовому

console.log(jonh);

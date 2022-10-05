'use script';


//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(name => {
  return name.length < 5;
});

console.log(shortNames);

//map

const answers = ['IvAn', 'AnnA', 'HeLlo'];

const ressult = answers.map(name => name.toLowerCase()).map(item => item[0].toUpperCase());

console.log(ressult);

//every some

const some = [4, 'dsad', 'desafsfsd'];

console.log(some.some(item => typeof (item) === 'number'));

console.log(some.every(item => typeof (item) === 'number'));

//reduce

const arr = [4, 5, 1, 3, 2, 6];

const sun = arr.reduce((prev, current) => prev + current, 3);

console.log(sun);


const arr1 = ['apple', 'pear', 'plum'];

const sun1 = arr1.reduce((prev, current) => `${prev},  ${current}`);

console.log(sun1);


const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal'
};

const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(arr => arr[0]);



console.log(newArr);

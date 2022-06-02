let message: string = 'Hello World';
console.log(message);

let isAny: any;
console.log(isAny + ', Тип: ' + typeof isAny);
isAny = 'string1';
console.log(isAny + ', Тип: ' + typeof isAny);
isAny = 4;
console.log(isAny + ', Тип: ' + typeof isAny);
isAny = {};
console.log(isAny + ', Тип: ' + typeof isAny);


let isVar1: boolean = false,
  isVar2 = true;
console.log(isVar1 + ', Тип: ' + typeof isVar1);
console.log(isVar2 + ', Тип: ' + typeof isVar2);

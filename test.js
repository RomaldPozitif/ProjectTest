let a = 'The quick brown fox jumps over the lazy dog';
let arrays = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function isPangram(string) {
  let counter = 0;
  let n = false;
  let arr = string.toLowerCase().split('');
  console.log(arrays.length);

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arrays[i] === arr[j]) {
        counter++
        break;
      }
    }
  }
  console.log(counter);
  if (counter == 26) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram(a));

//  let arr = [1,2,3,4,55,66];
//  let str = 'das dsdaada asdasa'

//  console.log(arr.join(''));
// console.log(str.split(''));
// console.log(arr);

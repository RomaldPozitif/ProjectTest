// Return the number(count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata(but not y).

// The input string will only consist of lower case letters and / or spaces.


// function getCount(str) {
//   const arrVowel = ['a', 'e', 'i', 'o', 'u'];
//   return str.split('').filter(x => arrVowel.includes(x)).length;
// }

// console.log(getCount('aabfe'));













// In this example you have to validate if a user input string is alphanumeric.The given string is not nil / null / NULL / None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore


// function alphanumeric(string) {
//   if (string === '') {
//     return false;
//   }
//   const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   const arr1 = string.toLowerCase()
//     .split('');
//     console.log(arr1);
//   const answer =
//   arr1.filter(x => !arr.includes(x))
//   .length;
//   console.log(answer);

//   if (answer > 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(alphanumeric(""));


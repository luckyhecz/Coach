//Вариант с консолью
const process = require('process');
let input = process.argv[2];
  let checkSum = 0;
  for (let i = 0; i < Math.floor(input.length/2); i++) {
    if (input[i] == input[input.length - 1 -i]) {
      checkSum++;
    }
  }
  if (Math.floor(input.length/2) == checkSum) {
    console.log('Да');
    return true
  }
  else {
    console.log('Не');
    return false
  }

// Второй вариант с функцией
// function Palindrom(input) {
//   let checkSum = 0;
//   for (let i = 0; i < Math.floor(input.length/2); i++) {
//     if (input[i] == input[input.length - 1 -i]) {
//       checkSum++;
//     }
//   }
//   if (Math.floor(input.length/2) == checkSum) {
//     console.log('Да');
//     return true
//   }
//   else {
//     console.log('Не');
//     return false
//   }
// }
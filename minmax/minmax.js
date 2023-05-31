const min = (numbers) => {
  let result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    // if (numbers[i] < result) {
    //   result = numbers[i];
    // }
    numbers[i] < result ? result = numbers[i] : result;
  }

  return result;
}
const max = (numbers) => {
  let result = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    // if (numbers[i] > result) {
    //   result = numbers[i];
    // }
    numbers[i] > result ? result = numbers[i] : result;
  }

  return result;
}
console.log(min([1,2,3]));
console.log(max([1,2,3]));

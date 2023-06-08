//minmax
const min = (numbers) => {
  return Math.min.apply(null, numbers);
}
const max = (numbers) => {
  return Math.max.apply(null, numbers);
}
console.log(min([1, 2, 3]));
console.log(max([1, 2, 3]));

//palindrom
const palindrom = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {

      return false;
    }
  }

  return true;
}
palindrom('шалаш');

//zero
const zero = () => {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = (Math.floor(Math.random() * 100));
    if (array[i] % 10 == 0) {
      array[i] = String(array[i]);
      array[i] = array[i].replace(/0/, 'zero');
    }
  }

  return array;
}
zero();

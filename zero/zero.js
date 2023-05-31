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

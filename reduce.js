// .reduce((accumulator, item, index, array ) => {}, [initial])

const arr = ["apples ", "are delicious ", ", yum!"];

const reduceResult = arr.reduce((sum, number, index, array) => {
  console.log(
    "index = ",
    index,
    "sum = ",
    sum,
    "number = ",
    number,
    "accumulator + number = ",
    sum + number
  );
  return sum + number; //the sum parameter is taking the return value on each iteration.
}, "All "); // initial value (if initial value is not set then initial value is taken from array at index 0)

console.log(reduceResult);

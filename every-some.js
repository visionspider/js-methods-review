//// .every((element, index, array) => {})
const arr = [1, 2, "3", 4, 5];

const someResult = arr.some((element, index, array) => {
  return typeof element === "string"; //if one of the evaluations return true .some will return true.
});

const everyResult = arr.every((element, index, array) => {
  return typeof element === "string"; //if one of the evaluations return false .every will return false.
});
if (everyResult) {
  //do something
  console.log("do something ( .every() )");
}
console.log("everyResult = ", everyResult);

if (someResult) {
  //do something
  console.log("do something ( .some() )");
}
console.log("everyResult = ", someResult);

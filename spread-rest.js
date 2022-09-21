//rest operator [...arr] vs spread parameter ((...element) => element.length)

//SPREAD PARAMETER
const myFunc = (element, ...elements) => {
  const fullString = elements.map((string) => {
    return element + string;
  });
  console.log(
    "fullString = ",
    fullString,
    "element = ",
    element,
    "elements = ",
    elements
  );
};
myFunc("B", "ravo", "reak", "rake", "ig");

//REST OPERATOR
const arr = [1, 2, 3, 4, [1, 2, 3]];
const newArr = [...arr];
const obj = { key: "value", key1: { name: "john" } };
const newObj = { ...obj };
obj.key1.name = "jeremy";
console.log(
  "arr = ",
  arr,
  "newArr = ",
  newArr,
  "obj = ",
  obj,
  "newObj = ",
  newObj
);

//lodash or immer is what you would want to use for deep cloning an array/object:
//https://www.npmjs.com/package/immer
//https://www.npmjs.com/package/lodash

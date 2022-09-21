// falsy: 0, -0, 0n, "", null, undefined, and NaN. Everything else is truthy.
let isTrue;
console.log(isTrue);
isTrue = -0; //insert different values (e.g.:  0, -0, 0n, "", null, undefined, and NaN)
console.log(isTrue);
if (isTrue) {
  console.log("I am true");
} else {
  console.log("no I am false");
}

// JS Fundamentals 3 Exercise 5
// Exercise 5
// ---------------
// Write an arrow function that returns the character at the specified position in the
// string.

// - If str is not a string, return undefined.
// - If there is no character at the provided index, return undefined.

//Notes taken in code along:
//this function needs to return a character from a string at a specific position in said string
//, call parameters (variables), declare variables,
// if statement with typeof checking if !== string and then returning undefined,
// if statement checking length and checking if === 0 (use .length to know how long the string is)
//we use .charAt() to get the character at a certain index / convert string to array and use .push() / [0]
//we return string

const getLetterAtIndex = (str, index) => {
  const isNotString = typeof str !== "string";
  const isStringEmpty = str.length === 0;
  const isIndexValid = index >= str.length || index < 0;

  //checking if str is a string, str is empty, index is not greater or equal to str length or index is not lesser than 0
  if (isNotString || isStringEmpty || isIndexValid) {
    console.log("I am inside the first if statement.");
    return undefined;
  }

  return str[index];
};

console.log(getLetterAtIndex("Hello World", 7)); //Expected Answer: "o"
console.log(getLetterAtIndex("Hello", 5)); //Expected Answer: undefined
console.log(getLetterAtIndex(["Hello World"], 6)); //Expected Answer: undefined
console.log(getLetterAtIndex(12345, 0)); //Expected Answer: undefined
console.log(getLetterAtIndex("Hello", -1)); //Expected Answer: undefined

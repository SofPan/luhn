// convert a string to a number
const convertStringToNumber = (str) => {
  return str ? Number(str) : null;
};

// get the last character in a string
const getLastCharacterInString = (str) => {
  return str ? str.charAt(str.length - 1) : "";
};

// get all characters except the last one in a string
const dropCheckDigit = (str) => {
  return str ? str.slice(0, str.length - 1) : "";
};

// double the number
const doubleNumber = (number) => {
  return number * 2;
};

const check = (checkNum) => {
  if (!checkNum) {
    throw new Error("Please input a number");
  }
  const checkDigit = getLastCharacterInString(checkNum);
  const payLoad = dropCheckDigit(checkNum);
  // return checkDigit === calculateCheckDigit;
};
console.log(check("17893729974"));
module.exports = { check, convertStringToNumber, getLastCharacterInString, dropCheckDigit };
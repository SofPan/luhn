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
  return typeof number === "number" ? number * 2 : "Please enter a number";
};
// map over an array, convert string elements to number, and double every number with an odd index number
const convertAndDouble = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("convertAndDouble requires an array");
  }

  return arr.map((item, index) => {
    item = convertStringToNumber(item);
    if (index % 2 !== 0) {
      item = doubleNumber(item);
    }
    return item;
  });
};

const check = (checkNum) => {
  if (!checkNum) {
    throw new Error("Please provide input");
  }
  const checkDigit = getLastCharacterInString(checkNum);
  const payLoad = dropCheckDigit(checkNum).split("");
  const convertAndDoublePayload = convertAndDouble(payLoad);
  // return checkDigit === calculateCheckDigit;
};
console.log(check("17893729974"));
module.exports = {
  check,
  convertStringToNumber,
  getLastCharacterInString,
  dropCheckDigit,
  doubleNumber,
  convertAndDouble
};
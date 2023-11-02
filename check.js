const convertStringToNumber = (str) => {
  return str ? Number(str) : null;
};

const getLastCharacterInString = (str) => {
  return str ? str.charAt(str.length - 1) : "";
};

const dropCheckDigit = (str) => {
  return str.slice(0, str.length - 1);
};
// const doubleEachNumber = (num) => {

// }

const check = (checkNum) => {
  if (!checkNum) {
    throw new Error("Please input a number");
  }
  const checkDigit = getLastCharacterInString(checkNum);
  const payLoad = dropCheckDigit(checkNum);
  // return checkDigit === calculateCheckDigit;
};
console.log(check("17893729974"));
module.exports = { check, convertStringToNumber, getLastCharacterInString };
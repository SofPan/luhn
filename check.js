const convertStringToNumber = (str) => {
  return str ? Number(str) : null;
};

const getLastCharacterInString = (str) => {
  return str ? str.charAt(str.length - 1) : "";
};

// const doubleEachNumber = (num) => {

// }

const check = (checkNum) => {
  if (!checkNum) {
    throw new Error("Please input a number");
  }
  const checkDigit = getLastCharacterInString(checkNum);
  const payLoad = checkNum.slice(0, checkNum.length - 1);
  console.log(payLoad);
  // return checkDigit === calculateCheckDigit;
};
console.log(check("17893729974"));
module.exports = { check, convertStringToNumber, getLastCharacterInString };
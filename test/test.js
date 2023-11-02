const chai = require('chai');
const assert = chai.assert;

const check = require('../check');

describe("convertStringToNumber function", () => {
  it("should return a number when a string is passed", () => {
    const expected = 123;
    const actual = check.convertStringToNumber("123");
    assert.strictEqual(actual, expected);
  });
  it("should return null when nothing is passed", () => {
    const expected = null;
    const actual = check.convertStringToNumber();
    assert.strictEqual(actual, expected);
  });
});

describe("getLastCharacterInString function", () => {
  it("should return the last character of a string", () => {
    const expected = "o";
    const actual = check.getLastCharacterInString("hello");
    assert.strictEqual(actual, expected);
  });
  it("should return an empty string when nothing is passed", () => {
    const expected = "";
    const actual = check.getLastCharacterInString();
    assert.strictEqual(actual, expected);
  });
});

describe("dropCheckDigit function", () => {
  it("should return all characters in a string except the last one", () => {
    const expected = "hi ther";
    const actual = check.dropCheckDigit("hi there");
    assert.strictEqual(actual, expected);
  });
  it("should return an empty string when nothing is passed", () => {
    const expected = "";
    const actual = check.dropCheckDigit();
    assert.strictEqual(actual, expected);
  });
});

describe("check function", () => {
  it("should return an error when nothing is passed in", () => {
    const expected = "Please input a number";
    const actual = () => check.check();
    assert.throws(actual, Error, expected);
  });
  it("should return true when the check digit matches", () => {
    const expected = true;
    const actual = check.check(17893729974);
    assert.strictEqual(actual, expected);
  });
  it("should return false when the check digit does not match", () => {
    const expected = false;
    const actual = check.check(17893729975);
    assert.strictEqual(actual, expected);
  });
});
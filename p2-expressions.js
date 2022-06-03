/*
    CIT 281 Project 2
    Name: Brady Rogers
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function (minLength, maxLength) {
  return Math.floor(Math.random() * (maxLength - minLength) + minLength);
};

// Function to get a single random letter in the alphabet, using getRandomInteger
const getRandomLetter = function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  return alphabet[getRandomInteger(0, alphabet.length)];
};

// Function to get a random length string between 10 and 20
const getRandomString = function (minLength, maxLength) {
  let result = "";
  for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
    result += getRandomLetter();
  }
  return result;
};

// Function to return string in ascending order
const getSortedString = function (string) {
  return string.split("").sort().join("");
};

//console.log(getRandomLetter());
//console.log(getRandomString(10, 20));
console.log(getSortedString(getRandomString(10, 20)));

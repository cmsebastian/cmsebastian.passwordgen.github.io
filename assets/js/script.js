// PASSWORD RESULT
const result = document.getElementById('password');

// PASSWORD LENGTH
const complexity = document.getElementById('length');
// console.log(length)

// CONSTANT ATTRIBUTES
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const numbers = document.getElementById('numbers');
const specialCharacters = document.getElementById('specialCharacters');

// BUTTON CONSTANTS
const generateButton = document.getElementById('generate');
const copyPassword = document.getElementById('copy');

const password = ''

// ARRAY OF ATTRIBUTES
var attributes = [
    upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower = 'abcdefghijklmnopqrstuvwxyz',
    nums = '0123456789',
    special = '!@#$%^&*()?'
];

// CONSOLE LOG TO CHECK VARIABLES ARE DECLARED
    console.log(attributes)
    console.log(upper)
    console.log(lower)
    console.log(nums)
    console.log(special)
    console.log(password)

// FUNCTIONS FOR GENERATING EACH ATRRIBUTE
function getRandomUpper() {
  let index = Math.floor(Math.random() * attributes[0].length);
  return (attributes[0][index]);
}

function getRandomLower() {
  let index = Math.floor(Math.random() * attributes[1].length);
  return (attributes[1][index]);
}

function getRandomNumber() {
  let index = Math.floor(Math.random() * attributes[2].length);
  return (attributes[2][index]);
  
}

function getRandomSpecial() {
  let index = Math.floor(Math.random() * attributes[3].length);
  return (attributes[3][index]);
}

// CONSOLE LOG FOR EACH ATTRIBUTE FUNCTIONS
console.log(getRandomUpper())
console.log(getRandomLower())
console.log(getRandomNumber())
console.log(getRandomSpecial())

const randomize = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  special: getRandomSpecial,
}

function generate() {
  const length = +complexity.value;
  console.log(length);
  console.log(typeof length)
}

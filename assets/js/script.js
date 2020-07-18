// PASSWORD RESULT
const result = document.getElementById('password');

// PASSWORD LENGTH
const complexity = document.getElementById('passwordLength');
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
    // console.log(attributes)
    console.log(upper)
    console.log(lower)
    console.log(nums)
    console.log(special)
    console.log(password)


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

console.log(getRandomUpper())
console.log(getRandomLower())
console.log(getRandomNumber())
console.log(getRandomSpecial())

// function upperCheck() {
//   if (document.getElementById('upperCase').checked = true) {
//     getRandomUpper()
//   }
// };

// function lowerCheck() {
//   if (document.getElementById('lowerCase').checked = true) {
//     getRandomLower()
//   }
// }; 
  
// function numberCheck() {
//     if (document.getElementById('numbers').checked = true) {
//       getRandomNumber()
//   }
// };

// function specialCheck() {
//   if (document.getElementById('specialCharacter').checked = true) {
//     getRandomSpecial()
//   }
// };  

// console.log(upperCheck());
// console.log(lowerCheck());
// console.log(numberCheck());
// console.log(specialCheck());

// GENERATE PASSWORD
// function generate() {
//   upperCheck();
//   lowerCheck();
//   numberCheck();
//   specialCheck();
// }

generateButton.addEventListener("click", function() {
  var length = complexity.value;
  console.log(length)
});
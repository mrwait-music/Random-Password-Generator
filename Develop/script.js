// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLowercase = "abcdefghijklmnopqrstuvwxyz";
var charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumbers = 123456789;
var charSpecial = "!@#$%^&*()"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
if addEventListener = prompt("How long would you like your password to be? 8-124 characters.");

// Prompt for length of PW 8-124

// Prompt for characters in the password
// Prompt for including lowercase
// Prompt for including uppercase
// Prompt for including special characters
// Prompt for including numbers
// Generate PW
// Display PW
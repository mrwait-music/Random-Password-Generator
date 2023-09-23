// Assignment Code
// Variables for characters
var generateBtn = document.querySelector("#generate");
var charLowercase = "abcdefghijklmnopqrstuvwxyz";
var charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumbers = "123456789";
var charSpecial = "!@#$%^&*()";
// Prompt for characters in the password
function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? (8-124 characters)");
// Prompt for length of PW 8-124
  if (passwordLength < 8 || passwordLength > 124) {
    alert("Invalid password length. Please enter a number between 8 and 124.");
    return "";
  }
// variables for prompts
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeSpecialChars = confirm("Include special characters?");
  var includeNumbers = confirm("Include numbers?");

  var charSet = "";

// Prompt for including lowercase
  if (includeLowercase) {
    charSet += charLowercase;
  }
// Prompt for including uppercase
  if (includeUppercase) {
    charSet += charUpperCase;
  }
  // Prompt for including special characters
  if (includeSpecialChars) {
    charSet += charSpecial;
  }
    // Prompt for including numbers
  if (includeNumbers) {
    charSet += charNumbers;
  }

  if (charSet.length === 0) {
    alert("Please select at least one character set.");
    return "";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}
// Generate PW
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Display PW
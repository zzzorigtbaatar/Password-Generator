// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharList = ["!", "\"", "#", "$", "&", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
var lowercaseList = "abcdefghijklmnopqrstuvwxyz"
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericList = [0,1,2,3,4,5,6,7,8,9];

var allChoicesArray;

var currentPassword;
var lengthChoice = 0;




//Generate random number between x and y
function randomNo(x, y) {
  var min = x;
  var max = y;

  var randomNo = Math.floor(Math.random() * (max - min + 1) + min);

  return randomNo;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Create password from prompt choices
function generatePassword() {
  var allChoicesArray;
  lengthChoice = getLengthPrompt();

  for (i = 0; i < lengthChoice; i++) {
    currentPassword += allChoicesArray[randomNo(0,allChoicesArray.length-1)]
  }
  return currentPassword;
}

//Create prompt for length of password
function getLengthPrompt() {
  var userLengthChoice = window.prompt("Enter password length (between 8 and 128 characters):");
  var stillNeedLength = true;
  do {
    if (!isNaN(userLengthChoice) && userLengthChoice < 8) {
      userLengthChoice = window.prompt("Please enter a password length between 8 and 128 characters:");
    } else if (!isNaN(userLengthChoice) && userLengthChoice > 128) {
      userLengthChoice = window.prompt("Please enter a password length between 8 and 128 characters:");
    } else if (!isNaN(userLengthChoice) && userLengthChoice > 8 && userLengthChoice < 128) {
      stillNeedLength = false;
      return userLengthChoice;
    } else if (isNaN(userLengthChoice)) {
      window.alert("Must enter a number.");
      userLengthChoice = window.prompt("Please enter a password length between 8 and 128 characters:");
    }
  } while (stillNeedLength)
}

//Create prompt to include lowercase characters
function generateLowercasePrompt(){

}

//Create prompt to include luppercase characters
function generateUppercasePrompt(){

}

//Create prompt to include numerical characters
function generateNumericalPrompt(){

}

//Create prompt to include special characters
function generateSpecialPrompt(){

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

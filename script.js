// Assignment Code
var generateBtn = document.querySelector("#generate");
var specCharList = ["!", "\"", "#", "$", "&", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]


var userChoiceObject = {
  lengthChoice: 0,
  lowercaseChoice: true,
  uppercaseChoice: true,
  numericChoice: true,
  specCharChoice: true,

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Create password from prompt choices
function generatePassword() {
  generateLengthPrompt();
  generateCharPrompt();

}

//Create prompt for length of password
function generateLengthPrompt() {
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
    } else if (isNaN(userLengthChoice)){
      window.alert("Must enter a number.");
      userLengthChoice = window.prompt("Please enter a password length between 8 and 128 characters:");
    }
  } while (stillNeedLength)
}

function checkLengthChoice(userLength) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

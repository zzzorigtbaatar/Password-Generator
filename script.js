// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharList = ["!", "\"", "#", "$", "&", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
var lowercaseList = "abcdefghijklmnopqrstuvwxyz"
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
  getLowercasePrompt();
  for (i = 0; i < lengthChoice; i++) {
    currentPassword += allChoicesArray[randomNo(0, allChoicesArray.length - 1)]
  }
  return currentPassword;
}

//Create prompt for length of password
function getLengthPrompt() {
  var userInput = window.prompt("Enter password length (between 8 and 128 characters):");
  var stillNeedInput = true;
  do {
    if (!isNaN(userInput) && userInput < 8) {
      userInput = window.prompt("Please enter a password length between 8 and 128 characters:");
    } else if (!isNaN(userInput) && userInput > 128) {
      userInput = window.prompt("Please enter a password length between 8 and 128 characters:");
    } else if (!isNaN(userInput) && userInput > 8 && userInput < 128) {
      stillNeedInput = false;
      return userInput;
    } else if (isNaN(userInput)) {
      window.alert("Must enter a number.");
      userInput = window.prompt("Please enter a password length between 8 and 128 characters:");
    }
  } while (stillNeedInput)
}

//Create prompt to include lowercase characters
function getLowercasePrompt() {
  var userChoice = window.prompt("Do you want lowercase letters? (y/n):");
  var stillNeedChoice = true;
  do {
    if (userChoice === "y") {
      allChoicesArray.concat(lowercaseList.split(""));
      stillNeedChoice = false;
    } else if (userChoice === "n") {
      stillNeedChoice = false;
    } else if (userChoice !== "y" || userChoice === "n") {
      window.alert("Please enter y or n");
      userChoice = window.prompt("Do you want lowercase letters? (y/n):");
    }
  } while (stillNeedChoice)
}


//Create prompt to include luppercase characters
function generateUppercasePrompt() {
  allChoicesArray.concat(uppercaseList.split(""));
}

//Create prompt to include numerical characters
function generateNumericalPrompt() {
  allChoicesArray.concat(numericList.split(""));
}

//Create prompt to include special characters
function generateSpecialPrompt() {
  allChoicesArray.concat(specialCharList);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharList = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var lowercaseList = "abcdefghijklmnopqrstuvwxyz"
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericList = "0123456789"
var allChoicesArray = [""];
var lengthChoice = 0;
var atLeastOneCharType = false;

//Generate random number between x and y
function randomNo(x, y) {
  var min = x;
  var max = y;
  var randomNo = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNo;
}

// Write password to the #password textarea
function writePassword() {
  atLeastOneCharType = false;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Create password from prompt choices
function generatePassword() {
  var currentPassword = "";
  allChoicesArray = [""];
  lengthChoice = getLengthPrompt();
  getLowercasePrompt();
  getUppercasePrompt();
  getNumericPrompt();
  getSpecialPrompt();
  if (atLeastOneCharType) {
    for (i = 0; i < lengthChoice; i++) {
      currentPassword += allChoicesArray.charAt(randomNo(0, allChoicesArray.length - 1));
    }
  } else if (!atLeastOneCharType) {
    window.alert("You must pick at least one character type.");
    restart();
  }
  return currentPassword;
}

//Create prompt for password length
function getLengthPrompt() {
  var userInput = window.prompt("Enter password length (between 8 and 128 characters):");
  var stillNeedInput = true;
  do {
    if (!isNaN(userInput) && userInput < 8) {
      window.alert("Password length cannot be less than 8 characters.");
      userInput = window.prompt("Please enter a password length between 8 and 128 characters:");
    } else if (!isNaN(userInput) && userInput > 128) {
      window.alert("Password length cannot be greater than 128 characters.");
      userInput = window.prompt("Please enter a password length between 8 and 128 characters:");
    } else if (!isNaN(userInput) && userInput >= 8 && userInput <= 128) {
      stillNeedInput = false;
      return userInput;
    } else if (isNaN(userInput)) {
      window.alert("Must enter a number.");
      userInput = window.prompt("Please enter a password length between 8 and 128 characters:");
    }
  } while (stillNeedInput)
  return;
}

//Create prompt for lowercase characters
function getLowercasePrompt() {
  var userChoice = window.prompt("Do you want lowercase letters? (y/n):");
  var stillNeedChoice = true;
  do {
    if (userChoice === "y") {
      stillNeedChoice = false;
      allChoicesArray += lowercaseList.split(" ").toString();
      console.log(allChoicesArray);
      atLeastOneCharType = true;
    } else if (userChoice === "n") {
      stillNeedChoice = false;
    } else if (userChoice !== "y" && userChoice !== "n") {
      window.alert("Please enter y or n");
      userChoice = window.prompt("Do you want lowercase letters? (y/n):");
    }
  } while (stillNeedChoice)
  return;
}


//Create prompt for uppercase characters
function getUppercasePrompt() {
  var userChoice = window.prompt("Do you want uppercase letters? (y/n):");
  var stillNeedChoice = true;
  do {
    if (userChoice === "y") {
      stillNeedChoice = false;
      allChoicesArray += uppercaseList.split(" ").toString();
      atLeastOneCharType = true;
    } else if (userChoice === "n") {
      stillNeedChoice = false;
    } else if (userChoice !== "y" && userChoice !== "n") {
      window.alert("Please enter y or n");
      userChoice = window.prompt("Do you want uppercase letters? (y/n):");
    }
  } while (stillNeedChoice)
}

//Create prompt for numerical characters
function getNumericPrompt() {
  var userChoice = window.prompt("Do you want numerical characters? (y/n):");
  var stillNeedChoice = true;
  do {
    if (userChoice === "y") {
      stillNeedChoice = false;
      allChoicesArray += numericList.split(" ").toString();
      atLeastOneCharType = true;
    } else if (userChoice === "n") {
      stillNeedChoice = false;
    } else if (userChoice !== "y" && userChoice !== "n") {
      window.alert("Please enter y or n");
      userChoice = window.prompt("Do you want numerical characters? (y/n):");
    }
  } while (stillNeedChoice)
}

//Create prompt for special characters
function getSpecialPrompt() {
  var userChoice = window.prompt("Do you want special characters? (y/n):");
  var stillNeedChoice = true;
  do {
    if (userChoice === "y") {
      stillNeedChoice = false;
      allChoicesArray += specialCharList.split(" ").toString();
      atLeastOneCharType = true;
    } else if (userChoice === "n") {
      stillNeedChoice = false;
    } else if (userChoice !== "y" && userChoice !== "n") {
      window.alert("Please enter y or n");
      userChoice = window.prompt("Do you want special characters? (y/n):");
    }
  } while (stillNeedChoice)
}

//Reset password and prompt choices
function restart() {
  allChoicesArray = [""];
  lengthChoice = 0;
  atLeastOneCharType = false;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

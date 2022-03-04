// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password Function
function generatePassword() {
  // Declare Variables needed
  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharList = ["\\", '"', '!', "'", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var numericCharList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Choose Length Section
  var passwordLength = parseInt(prompt("Choose your password character length (Between 8 and 128"));
  // Length choice error messages, not a number and length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Error" + "\n" + "Password Length must be a number between 8 and 128");
    return "Invalid input. Please try again";
  }


  // Choose character types 
  var lowerCaseBool = confirm("Press OK to use Lower Case characters?");
  var upperCaseBool = confirm("Press OK to use Upper Case characters?");
  var numericCharBool = confirm("Press OK to use Numeric characters?");
  var specialCharBool = confirm("Press OK to use Special characters? (eg. #. %, ^, *");
  var allPossibleCharacters = [];

  // Character type error messages
  if (lowerCaseBool === false && upperCaseBool === false && numericCharBool === false && specialCharBool === false) {
    alert("Error" + "\n" + "You must choose at least one character type");
    return "Invalid input. Please try again";
  }

  // List which characters will be used
  if (lowerCaseBool === true) {
    allPossibleCharacters.push.apply(allPossibleCharacters, lowerCaseList)
  }
  if (upperCaseBool === true) {
    allPossibleCharacters.push.apply(allPossibleCharacters, upperCaseList)
  }
  if (numericCharBool === true) {
    allPossibleCharacters.push.apply(allPossibleCharacters, numericCharList)
  }
  if (specialCharBool === true) {
    allPossibleCharacters.push.apply(allPossibleCharacters, specialCharList)
  }

  // Generate Password
  var localPassword = ""

  for (let i = 0; i < passwordLength; i++) {
    localPassword = localPassword + allPossibleCharacters[Math.floor(Math.random() * allPossibleCharacters.length)];
  }

  alert("Your password is  " + passwordLength + " characters long" + "\n" +
    "Use Lower Case Characters = " + lowerCaseBool + "\n" +
    "Use Upper Case Characters = " + upperCaseBool + "\n" +
    "Use Numeric Characters = " + numericCharBool + "\n" +
    "Use Special Characters = " + specialCharBool + "\n" +
    "Your password has been generated. Click OK to see password below."
  );

  return localPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const symbols = "!#$%&*^";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";

let passwordBucket = "";

// THIS IS MY BAD CODE. I need to be able to make this produce one random character from passwordBucket when called. Also I am tring to make something uppercase at line 38 that I need help with
 function randomChar(stringVar) {
   return stringVar[Math.floor(Math.random()* stringVar.length)];
 }


// Function to generate the password and ask for password requirements 
function generatePassword() {
  passwordBucket = "";

  // Asks for and defines passwordLength
  var passwordLength = window.prompt("How Many Characters Would You Like in Your Password?");
  while(!((passwordLength >= 8) && (passwordLength <= 128)))
  {
    passwordLength = window.prompt("Please input a value between 8 and 128");
  }

  // Prompts asking what to put in passwordBucket
  var promptSymbol = window.confirm("Would You Like Your Password to Include Special Characters?");
  var promptLower = window.confirm("Would You Like Your Password to Include Lowercase Letters?");
  var promptUpper = window.confirm("Would You Like Your Password to Include Uppercase Letters?");
  var promptNumbers = window.confirm("Would You Like Your Password to Include Numbers?");



// Code placing strings into the passwordBucket based on response to above prompts
  if (promptSymbol) {
    passwordBucket += symbols
  };
  if (promptLower) {
    passwordBucket += alphabet
  };
  if (promptUpper) {
    passwordBucket += alphabet.toUpperCase()
  };
  if (promptNumbers) {
    passwordBucket += numbers
  };

  if (passwordBucket == "") {
    window.alert("You have not chosen any characters to include in your password! Try again.");
    return generatePassword();
  }

  // Creates password by choosing random characters from passwordBucket
  var password = "";

  while (password.length < passwordLength)
  {
    password += randomChar(passwordBucket);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

randomChar ();

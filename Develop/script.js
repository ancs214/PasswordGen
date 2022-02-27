// Assignment code here
let alphaCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphaLow = 'acdefghijklnopqrstuvwxyz';
let num = '0123456789';
let specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let allChar = '';
let length = '';


// Get references to the #generate element 
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLengthPrompt = Number(prompt('Pick a password length from 8 to 128 characters.'));
  if (!passwordLengthPrompt || passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    alert('Please type a valid answer!');
    writePassword();
  }
  else {
    length += passwordLengthPrompt;
  }
  let addLowercase = window.confirm('Click Okay if you would like to include lowercase characters.');
  let addUppercase = window.confirm('Click Okay if you would like to include uppercase characters.');
  let addNumbers = window.confirm('Click okay if you would like to include numbers.');
  let addSpecialChar = window.confirm('Click okay if you would like to include special characters.');

  if (addLowercase) {
    allChar += alphaLow;
  }
  if (addUppercase) {
    allChar += alphaCap;
  }
  if (addNumbers) {
    allChar += num;
  }
  if (addSpecialChar) {
    allChar += specialChar
  }
  if (!allChar) {
    alert('You must include at least one character type!');
    writePassword();
  }

  // THIS FUNCTION NOT WORKING
  let newPassword = '';
  for (let i = 0; i < length; i++) {
    newPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
    console.log(newPassword);
  }
  let password = document.querySelector("#password");

  password.value = newPassword;

}





// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



// ************ASSIGNMENT***********
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// function generatePassword() {
  //   let password = '';
  //   for (let i = 0; i <= length; i++) {
  //     let randomNumber = (Math.floor(Math.random() * allChar.length));
  //     password += allChar.substring(randomNumber, randomNumber +1);
  //     console.log(password);
  //   }
  // }
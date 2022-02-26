// Assignment code here
let alphaCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphaLow = 'acdefghijklnopqrstuvwxyz';
let num = '0123456789';
let specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let allChar = '';

// Get references to the #generate element 
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = prompt('Pick a password length from 8 to 128 characters.');
    if (!passwordLength || passwordLength <8 || passwordLength >128) {
      alert('Please type a valid answer!');
      writePassword();
    }
  else {
    passwordLower();
  } 
}
  
  function passwordLower() {
    let passwordLowerPrompt = window.confirm('Click Okay if you would like to include lowercase characters. Otherwise click Cancel.');
    if (passwordLowerPrompt) {
      allChar += alphaLow;
      passwordUpper();
    }  else {
      passwordUpper();
    }
    }
  
  function passwordUpper() {
    let passwordUpperPrompt = window.confirm('Click Okay if you would like to include uppercase characters.');
    if (passwordUpperPrompt) {
      allChar += alphaCap;
      passwordNum();
    } else {
      passwordNum();
    }
  }
  
  function passwordNum() {
    let passwordNumPrompt = window.confirm('Click okay if you would like to include numbers.');
    if (passwordNumPrompt) {
      allChar += num;
      passwordSpecial();
    } else {
      passwordSpecial();
    }
  }
  
  function passwordSpecial() {
    let passwordSpecialPrompt = window.confirm ('Click okay if you would like to include special characters.');
    if (passwordSpecialPrompt) {
      allChar += specialChar;
      console.log(allChar);
      return allChar;
    }
  }


  // let password = generatePassword();

  // let passwordText = document.querySelector("#password");

  // passwordText.value = password;



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
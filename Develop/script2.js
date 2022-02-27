var specialChar = ['@', '$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '"', "'", '_'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function passwordOptions(){
var passwordLength = parseInt(prompt('how many characters would you like in your password'));
if(Number.isNaN(passwordLength)) {
alert('must be a number');
return null;
}
if(passwordLength < 8 || passwordLength > 128) {
alert ('password must be more than 8 characters or less than 128 characters');
return null;
}
var includeSpecial = confirm('would you like to include special characters');
var includeNumbers = confirm('would you like to include numbers');
var includeUpperCase = confirm('would you like to include a upper case letters');
var includeLowerCase = confirm('would you like to include a lower case letters');
if(
includeSpecial === false &&
includeNumbers === false &&
includeUpperCase === false &&
includeLowerCase === false
) {
alert('you must include one of these character type');
return null;
}
var includedOptions = {
passwordLength: passwordLength,
includeSpecial: includeSpecial,
includeNumbers: includeNumbers,
includeUpperCase: includeUpperCase,
includeLowerCase: includeLowerCase,
}
return includedOptions;
}
function getRandom(arr){
var randomIndex = Math.floor(Math.random() * arr.length);
var ranDomElement = arr[randomIndex];
return ranDomElement;
}
function generatePassword(){
var options = passwordOptions();
var result = [];
var potentialCharacters = [];
var confirmedCharacters = [];
if(!options) return null;
if(options.includeSpecial){
potentialCharacters = potentialCharacters.concat(specialChar);
confirmedCharacters.push(getRandom(specialChar));
  }
if(options.includeNumbers){
potentialCharacters = potentialCharacters.concat(numbers);
confirmedCharacters.push(getRandom(numbers));
  }
if(options.includeUpperCase){
potentialCharacters = potentialCharacters.concat(upperCase);
confirmedCharacters.push(getRandom(upperCase));
  }
if(options.includeLowerCase){
potentialCharacters = potentialCharacters.concat(lowerCase);
confirmedCharacters.push(getRandom(lowerCase));
  }
for (var i = 0; i < options.passwordLength; i++) {
var potentialCharacters = getRandom(potentialCharacters);
result.push(potentialCharacters)
  }
for(var i = 0; i < confirmedCharacters.length; i++) {
result[i] = confirmedCharacters[i];
}
return result.join('');
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
// console.log(passwordText)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
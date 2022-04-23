// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lowerCaseSet);

var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperCaseSet);

var specialCharSet = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
console.log(specialCharSet);

var numberCharSet = "1234567890".split("")
console.log(numberCharSet);




function writePassword() {
  var characterSelection = prompt("Please confirm length of password 8-128 characters");
  console.log(characterSelection, typeof characterSelection);
  
  if (characterSelection >= 8 && characterSelection <= 128) {
    
    var lowerCaseSet = confirm("Would you like to include lowercase letters? ");
    
    var upperCaseSet = confirm("Would you like to include UPPERCASE letters? ");
    
    var specialCharSet = confirm(
      "Would you like to include Special Characters !#$%&'()*+,-./:;<=>?@[]^_`{|}~? ");
      
    var numberCharSet = confirm("Would you like to include numbers?");
    
    generatePassword(lowerCaseSet,upperCaseSet,specialCharSet,numberCharSet, characterSelection)
  
  } else if (isNaN(characterSelection)) {
    alert("Add a number example...10 ");
    writePassword();

  } else if (characterSelection < 8 || characterSelection > 128) {
    alert("Please choose a number between 8 & 128");
    writePassword();
  }
}



function generatePassword(isLowerEnabled, isUpperEnabled, isSpecialEnabled, isNumberEnabled, passwordLength) {
  console.log(isLowerEnabled, isUpperEnabled, isSpecialEnabled, isNumberEnabled);
  var includedCharacterSet = [];
  if (isLowerEnabled) {
    includedCharacterSet = includedCharacterSet.concat(lowerCaseSet);
  }
  if (isUpperEnabled) {
    includedCharacterSet = includedCharacterSet.concat(upperCaseSet);
  }
  if (isSpecialEnabled) {
    includedCharacterSet = includedCharacterSet.concat(specialCharSet);
  }
  if (isNumberEnabled) {
    includedCharacterSet = includedCharacterSet.concat(numberCharSet);
  }
  if (includedCharacterSet.length === 0){
    alert("Your password must include something")
    return
  }
  
  console.log(includedCharacterSet);


  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * includedCharacterSet.length)
    let selectedChar = includedCharacterSet[randomIndex];
    password = password + selectedChar
    console.log(randomIndex, selectedChar)
  }




  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

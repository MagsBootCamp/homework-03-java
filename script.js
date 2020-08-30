//My adds
// Or is this better?  The User is prompted "Enter the number of characters for your password. The minimum is 8 and maximum is 128. "   
function charLength() {
  var charLength = prompt("Enter the number of characters for your password. The minimum is 8 and maximum is 128.");
  if (charLength < 8 > 128) {alert("Your character choice is incorrect - it is either not a number or it was <8 or >128. Click OK to re-enter")}
// Should console log the answer"         
  console.log("Your character choice is incorrect - it is either not a number or it was <8 or >128. Click OK to re-enter")











// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














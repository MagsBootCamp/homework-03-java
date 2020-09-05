//My adds

//Establishing the variables to store answers to then call on to generate the password according to user responses.

var charLength = prompt("Enter the number of characters for your password. The minimum is 8 and maximum is 128.");

var lowCase = confirm("Include lower case letters?");

var upperCase = confirm("Include upper case letters?");

var specCase = confirm("Include special characters?");

var number = confirm("Include numbers?");

//Console log the answers to check its operation

console.log(charLength)

console.log(lowCase);

console.log(upperCase);

console.log(specCase);

console.log(number);


//Create a function to check if it was a text character or the number of characters the user input was >=8 and <=128.
// I tried to include  typeof charLength === "string" ||  in the if statement; that is it would have read:
//if (typeof charLength === "string" || charLength < 8 || charLength > 128)...but it didnt work. Couldnt work out how to get it to woerk :(
//Tell the user if they got it wrong. If it is wrong the function stops. I have not attempted to get the charLength to run again. 

function numberChecker(charLength) {

  if (charLength < 8 || charLength > 128) {

    alert("Your character choice is incorrect - it is either not a number or it was <8 or >128");

      //this only gives an alert to the user (no information for the program) and logs it - it doesnt provide the result to be available for the code to then continue to include in functions to dreate the password
      console.log("Your character choice is incorrect - it is either not a number or it was <8 or >128");
    
    //code needs to know what the result was so return provides the feedback to the program
    return false;

    }

  else {
      //this only logs it - it doesnt provide the result to be available for the code to then continue to execute to dreate the password
    console.log("the user choice was correct as a number and within range of 8 to 128");

      //code needs to know what the result was so resturn will provide the result to the program
      return true;

    }
  }

//The need to create a variable for the result of the number checker to be stored in - the result of numberChecker function.
  var isCharLengthValid = numberChecker(charLength);

  //If the charlength was correct then we can build the structure of the password according to the user choices.
  //I googled "javascript generate password" as I needed help on how to program tell it to use the charLength and the other chocies that returned "true"
  //using the writePassword code provided...
  if (isCharLengthValid) {

    if(lowCase || upperCase || number || specCase) {

      writePassword();

      console.log(password);
    }

  }

// Write password to the #password input - this was provided in the script file
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Need a function to generate the password I googled "javascript generate password" 
//...so from: https://stackoverflow.com/questions/1497481/javascript-password-generator . 
//I could not work out how into the genretaePassword function,  to have each of my var (so number, upperCase, lowCase, specCase) selected if true?
//So my password generator isnt perfect as its going to generate passwords with characters that the user did not select
//...only the length will be corrct.
function generatePassword() {
  var length = charLength;
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*";
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

//Need to be able to call the numberChecker function
numberChecker(charLength);


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














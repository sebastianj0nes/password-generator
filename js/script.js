// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // Object to hold user input
  characteristics={
    numChar: prompt("How many characters would you like your password? Min of 10, max of 64 (including 64)"),
    lowerCase: confirm("Would you like lowercase letters? (OK = yes, cancel = no)"),
    upperCase: confirm("Would you like uppercase (OK = yes, cancel = no)"),
    includeNum: confirm("Would you like numbers? (OK = yes, cancel = no)"),
    specialChar: confirm("Would you like special characters? (OK = yes, cancel = no)")
  };

  // If invalid num - let user know and return
  if (characteristics.numChar <10 | characteristics.numChar > 64){
    alert("Invalid number of characters - please try again");
    return;
  }
 
  // Check if password contains at least one option chosen by user - if none - alert user 
  if (!characteristics.lowerCase && !characteristics.upperCase && !characteristics.includeNum && !characteristics.specialChar){
    alert("You have selected no options for the password. Please try again");
    return;
  }

}

// Function for getting a random element from an array
function getRandom(arr) {
  // Create variable to hold random element from chosen array
  var randomEle = arr[Math.floor(Math.random() * arr.length)];
  // Return random element
  return randomEle;
}

// So far - got user inputs & can generate a random element from arrays of characters

// Now;
// Need to generate password based on user input
  // How?
// Take a random element each time from the selected inputs
// Each time based off true inputs 




// Function to generate password with user input
function generatePassword() {
  
  // Run func to get password options

  getPasswordOptions();

  var trueChars = (Object.entries(characteristics));
  
  var madePassword = [];

// Do .. while loop to run random numbers whilst the madePassword
//  array is less than number of characters seleceted by user

  do {
    if (trueChars[1][1] === true){
      madePassword.push(getRandom(lowerCasedCharacters));
    }
    if (trueChars[2][1] === true){
      madePassword.push(getRandom(upperCasedCharacters));
    }
    if (trueChars[3][1] === true){
      madePassword.push(getRandom(numericCharacters));
    }
    if (trueChars[4][1] === true){
      madePassword.push(getRandom(specialCharacters));
    }
  } while (madePassword.length < characteristics.numChar);

  
  console.log(madePassword.toString());




}

generatePassword();
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// Generate random user password

//Password length
var length = document.getElementById("length").value;

//Random password values
var alphaNumericaCharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

password = "";

//Create a for loop to choose random password characters
for (var i =0; i <= length; i++) {
    password = password + alphaNumericaCharacters.charAt(Math.floor(Math.random() * Math.floor(alphaNumericaCharacters.length - 1)));
    }

//Add password to textarea
document.getElementById("password").alphaNumericaCharacters = password;

//Set default length display to 8
document.getElementById("length").innerHTML = "length: 8";

//Function added to set length based on length position
document.getElementById("length").oninput = function (){

if(document.getElementById("length").alphaNumericaCharacters > 0){
    document.getElementById("length").innerHTML = "length" + document.getElementById("length").alphaNumericaCharacters;
    }

else {
     document.getElementById("length").innerHTML = "length: 1";
    }

//Function added to copy password to clipboard
function copyPassword(){
        
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password Copied To Clipboard");

// generate.addEventListener("click", function generatePassword()

function generatePassword(document.getElementById(passwordLength)) {

    

    var passwordLength = document.getElementById("passwordLength").value;

    var attributes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?<>"
    var password = " "

    for (var i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * passwordLength));
    } return password;


    console.log(password);
    console.log(passwordLength);
    console.log(attributes);
});

document.getElementById("generate").addEventListener("click", generatePassword());



console.log( generatePassword() );
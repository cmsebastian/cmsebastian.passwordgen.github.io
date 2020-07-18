generate.addEventListener("click", function generatePassword(){

    var passwordLength = document.getElementById("passwordLength").value;

    var attributes = 

   var password = ""

    for (var i = 0; i <= passwordLength; i++) {
        password = password + attributes.charAt(Math.floor(Math.random() * Math.floor(passwordLength.length - 1)));
    }

    document.getElementById("password").value = password;

    // console.log(password);
    // console.log(passwordLength);
    // console.log(attributes);
    // console.log(generatePassword());
});

// console.log(generatePassword());
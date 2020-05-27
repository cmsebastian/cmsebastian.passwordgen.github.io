//a promt that indicates complexity
alert("Use slider to indicate length of password");
alert(
  "Select lowercase, uppercase, numbers or special characters"
);

//generate 
function generate() {
  
  var complexity = document.getElementById("slider").value;

  //possible values

  var values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;=?@[]^_`{|}~";
 
  

  var password = "";

  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

 //add past passwords
  document.getElementById("display").value = password;

  //add password to previously generated
  document.getElementById("lastPass").innerHTML += password + "<br ?";
}

document.getElementById("length").innerHTML = "Length: 100";

//function to set length of slider position
document.getElementById("slider").oninput = function () {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML =
      "Length: " + document.getElementById("slider").value;
  } else {
    document.getElementById("length").innerHTML = "Length: 8";
  }
};


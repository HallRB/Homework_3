//generate//
function generate(){
    //seet password length/complexity//
    let complexity = document.getElementById("slider").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose password characters//

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add pw to text box display
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastPasswords").innerHTML += password + "<br />";
}

//set deault length dsiplay of 25//
document.getElementById("lengthBar").innerHTML = "Length: 8";

//function set length based on slider position//
document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("lengthBar").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("lengthBar").innerHTML = "Length: 8";
    }
}

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");
        alert("Password copied to clipboard");
}
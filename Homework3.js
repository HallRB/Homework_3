//_____________________________________________________//

// ALL USEABLE CHARACTERS
spec = ["!", "@", "#", "$", "%", "&", "(", ")", "*", "+", "=", "_",];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alph0 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;
//_____________________________________________________//

//VARIABLES//
var chaLeng;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
//_____________________________________________________//

// UPPERCASE 
var toUpper = function (x) {
    return x.toUpperCase();
};

alph1 = alph0.map(toUpper);
//_____________________________________________________//

    // ALERT TEXT //
var get = document.querySelector("#butt0");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("pw").placeholder = ps;
});

function generatePassword() {
 chaLeng = parseInt(prompt("How long do you want your password to be? (passwords must be between 8 and 128 characters long)"));

    //----CANCEL/ERROR----//
    if (!chaLeng) {
        alert("You have not entered a valid value");

    } else if (chaLeng < 8 || chaLeng > 128) {
        chaLeng = parseInt(prompt("You must choose a number between 8 and 128"));

    //----REPSONSE CHOICES----//
    } else {

        confirmNumber = confirm("Do you want this password to contain any numbers?");
        confirmCharacter = confirm("Do you want this password to contain any special characters                   ex: @ $ % * #");
        confirmUppercase = confirm("Do you want this password to contain any UPPERCASE letters?");
        confirmLowercase = confirm("Do you want this password to contain any lowercase letters?");
    };

    //----ALL CANCEL----//
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must select at least one variable!");
    }
  
    //----4/4 YES----//
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = alert("Here is your random generated password")
        choices = spec.concat(number, alph0, alph1);
    }
    //----3/4 YES----//
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = alert("Here is your random generated password")
        choices = spec.concat(number, alph1);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = alert("Here is your random generated password")
        choices = spec.concat(number, alph0);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = alert("Here is your random generated password")
        choices = spec.concat(alph0, alph1);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = alert("Here is your random generated password")
        choices = number.concat(alph0, alph1);
    }
    //----2/4 YES----//
    else if (confirmCharacter && confirmNumber) {
        choices = alert("Here is your random generated password")
        choices = spec.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = alert("Here is your random generated password")
        choices = spec.concat(alph0);

    } else if (confirmCharacter && confirmUppercase) {
        choices = alert("Here is your random generated password")
        choices = spec.concat(alph1);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alert("Here is your random generated password")
        choices = alph0.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alert("Here is your random generated password")
        choices = alph0.concat(alph1);

    } else if (confirmNumber && confirmUppercase) {
        choices = alert("Here is your random generated password")
        choices = number.concat(alph1);
    }
    //----1/4 YES----//
    else if (confirmCharacter) {
        choices = alert("Here is your random generated password")
        choices = spec;
    }
    else if (confirmNumber) {
        choices = alert("Here is your random generated password")
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alert("Here is your random generated password")
        choices = alph0;
    }

    else if (confirmUppercase) {
        choices = alert("Here is your random generated password")
        choices = space.concat(alpha2);
    };
//_____________________________________________________//

//PLACEHOLDER VARIABLE FOR USER INPUT//
    var password = [];

//_____________________________________________________//

//RANDOMIZER//
    for (var i = 0; i < chaLeng; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

//_____________________________________________________//

//PASSWORD PROPERTIES//
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("pw").textContent = ps;
}

var copy = document.querySelector("#butt1");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("pw").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}

//_____________________________________________________//

const goodColor = "#4C5B6D";
const badColor = "rgb(255, 102, 102)";

function passCheck() {
    let pass1 = document.getElementById('pass');
    let pass2 = document.getElementById('passv');

    if (pass1.length < 8) {
        pass1.style.borderColor = badColor;
    }

    if (pass1.value == pass2.value) {
        pass2.style.borderColor = goodColor;
    } else {
        pass2.style.borderColor = badColor;
    }
}

function emailCheck() {
    let email = document.getElementById("email");

    if (email.value.match(/[\w\d\.]+@\w+\..+/)){
        email.style.borderColor = goodColor;
    } else {
        email.style.borderColor = badColor;
    }
}

function basicValidation() {
    let name = document.forms["regis"]["name"].value;
    let email = document.forms["regis"]["email"].value;
    let addr = document.forms["regis"]["addr"].value;
    let topic = document.forms["regis"]["topic"].value;
    let hp = document.forms["regis"]["hp"].value;
    let gender = document.forms["regis"]["gender"].value;
    let password1 = document.forms["regis"]["pass"].value;
    let password2 = document.forms["regis"]["passv"].value;
    if (name != "" && email != "" && addr != "" && gender != "" && hp != "" && topic != "" && password1 != "" && password2 != "" && hp.length <= 13 && hp.length >= 10) {
        return true;
    } else {
        alert('You must fill all required form!');
        return false;
    }
}
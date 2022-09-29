let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

/**
 * Characters
 */
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"

let newPassword = "";

sizePassword.innerHTML = sliderElement.value;


/**
 * character count when swiping the bar
 */
slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

/**
 * Function to generate and create password
 */

function generatePassword() {

    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));

    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

/**
 *  Create a function copy to clipboard
 */

function copyPassword() {
    alert("Password copied successfully!");
    navigator.clipboard.writeText(newPassword);

}
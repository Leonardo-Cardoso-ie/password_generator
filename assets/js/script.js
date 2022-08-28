
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

/**
 * Create password
 */
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"

let newPassword ="";

sizePassword.innerHTML = sliderElement.value;


/**
 * character count when swiping the bar
 */
slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}



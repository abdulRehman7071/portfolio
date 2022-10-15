// unable to implement one code to all the index files
// function validateForm() {
    // will apply class 

let user_name = document.querySelector('.user_name');
let password = document.querySelector('.password_box');
let email = document.querySelector('.email_box');
let error = document.querySelector('.error');
let form = document.querySelector('.sign_up_form');

let message = []

function checkName() {
    if (user_name.value == null || user_name.value == "") {
        message.push("Name is required");
    }
}

function checkPassword() {
    if (password.value.length < 8) {
        message.push("Password must be at least 8 characters long");

    }
}
function checkEmail() {
    if (email.value == "") {
        message.push("enter a valid e-mail address");
        email.focus();

    }
    else if (email.value.indexOf("@", 0) < 0) {
        message.push("enter a valid e-mail address");
        email.focus();

    }
    else if (email.value.indexOf(".", 0) < 0) {
        message.push("enter a valid e-mail address");
        email.focus();

    }
}


form.addEventListener('submit', (e) => {
    checkName();
    checkEmail();
    checkPassword();
    if (message.length > 0) {
        e.preventDefault();
        error.innerHTML = message.join(',')
    }
})



let forget_email_input = document.querySelector('#email');
let forget_form = document.querySelector('.forget_form');


forget_form.addEventListener('click', (e) => {
    alert('Please enter a valid e-mail address');
    checkEmail(forget_email_input);
    if (message.length > 0) {
        e.preventDefault();
        error.innerHTML = message.join(',')
    }
})
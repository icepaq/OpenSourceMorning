import React, { useState } from 'react'

const SignUp = () => {


// Fix this password validation shit later

// Declaring Variables to get both original pass and confirmed pass
// var password = document.getElementById('login-input-password');
// var confirmPassword = document.getElementById('login-confirm-password');

// Function that is in charge of validating password
// function validatePassword() {
//     if(password.value != confirmPassword.value) {
//         confirmPassword.setCustomValidity("Passwords Do Not Match!")
//     }
//     else {
//         confirmPassword.setCustomValidity('');
//     }
// }

// password.onchange = validatePassword;
// confirmPassword.onkeyup = validatePassword;

const [password, setPassword] = useState('');
const [confirmpassword, setConfirmPassword] = useState('');

function updatePassword(e) {
    setPassword(e.target.value);
}

function updateConfirmPassword(e) {
    setConfirmPassword(e.target.value);
}

function submitForm() {
    if (password === confirmpassword) {
        console.log('Passwords Match');
        // Call signup api using fetch()
    }
    else {
        alert('Passwords do not match!');
    }
}

    return (
        <div className='login-container'>
            <form action="" class="form-login">
                <div class="welcome-message">
                    <h1 class="welcome">Create an Account!</h1>
                    <p class="login-info">Sign Up Today To Get Access!</p>
                </div>

                <label for="login-input-user" class="login__label">
                    Username
                </label>
                <input id="login-input-user" class="login__input" type="text" required/>

                <label for="login-input-email" class="login__label">
                    Email
                </label>
                <input id="login-input-email" class="login__input" type="email" />

                <label for="login-input-password" class="login__label">
                    Password
                </label>
                <input id="login-input-password" class="login__input" type="password" required onChange={updatePassword}/>

                <label for="login-confirm-password" class="login__label">
                    Confirm Password
                </label>
                <input id="login-confirm-password" class="login__input" type="password" required onChange={updateConfirmPassword}/>

                <label for="login-sign-up" class="login__label--checkbox">
                    <input id="login-sign-up" type="checkbox" class="login__input--checkbox" />
                    <a href="#">Accept Terms and Conditions</a>
                </label>
                
                <button onClick={submitForm} class="login__submit">Sign Up</button>

            </form>

        </div>
    )
}

export default SignUp

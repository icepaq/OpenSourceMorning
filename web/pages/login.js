
const Login = () => {
    return (

        <div className='login-container'>
            <form action="" class="form-login">

                <div class="welcome-message">
                    <h1 class="welcome">Welcome Back</h1>
                    <p class="login-info">Enter Your Credential To Access Your Account</p>
                </div>

                <label for="login-input-user" class="login__label">
                    Username
            </label>
                <input id="login-input-user" class="login__input" type="text" required />

                <label for="login-input-password" class="login__label">
                    Password
            </label>
                <input id="login-input-password" class="login__input" type="password" required />

                <label for="login-sign-up" class="login__label--checkbox">
                    <input id="login-sign-up" type="checkbox" class="login__input--checkbox" />
                Keep me Signed in
            </label>

                <button type="submit" class="login__submit">Sign in</button>

            </form>
            <a href="#" class="login__forgot">Forgot Password?</a>
        </div>

    )
}

export default Login

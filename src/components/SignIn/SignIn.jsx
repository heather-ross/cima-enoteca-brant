import React from 'react'
import UserInput from '../UserInput/UserInput'

const SignIn = () => {
    return (
        <form
            className="sign-in__form"
            id="signInForm"
            name="signInForm"
            onSubmit={this.handleSubmit}>
            <div className="sign-in__form-details">
                <UserInput
                label="User Name"
                placeholder="User Name"
                name="userName"
                onChange={this.handleChange}
                error={this.userNameError} />
                <UserInput
                label="Password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                error={this.passwordError} />
            </div>
            <button className="sign-in__button">{this.handleSubmit}</button>
        </form>
    )
}

export default SignIn

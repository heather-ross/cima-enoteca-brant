import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import './SignIn.scss';
import { AuthContext } from '../../contexts/AuthContext';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');

    const validateForm = () => {
        return email.length > 4 && password.length > 5;
    }

    return (
        <>
            <section className="sign-in">
                <div className="sign-in__wrap">
                    <h2 className="sign-in__title">CIMA Sign In</h2>
                    <form
                        className="sign-in__form"
                        id="signInForm"
                        name="signInForm"
                    >
                        <div className="sign-in__details">
                            <input
                                label="User Email"
                                placeholder="Enter email"
                                name="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)} />
                            <input
                                label="Password"
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button
                            className="sign-in__button form__button"
                            type="submit"
                            disabled={!validateForm()}
                            onClick={(e) =>
                                login(e, email, password)}>
                            Sign In
                            </button>
                    </form>
                    <p className="sign-in__reset-pass">Forget password? <Link to='/reset'>Reset</Link></p>
                </div>
            </section>
        </>
    )

}

export default SignIn
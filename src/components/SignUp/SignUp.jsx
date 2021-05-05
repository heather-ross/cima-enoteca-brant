import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './SignUp.scss';
import { useAuth } from '../../contexts/AuthContext';

const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create account')
        }
            setLoading(false)
            e.target.reset();
    } 

    return (
        <section className="sign-up">
            <div className="sign-up__wrap">
                <h2 className="sign-up__title">CIMA Create New User</h2>
                {currentUser && currentUser.email}
                {error && <p>error</p>}
                <form
                    className="sign-up__form"
                    id="signUpForm"
                    name="signUpForm"
                    onSubmit={handleSubmit}>
                    <div className="sign-up__details">

                        <input
                            label="Email"
                            placeholder="Email"
                            name="email"
                            id="email"
                            type="email"
                            ref={emailRef}
                            required />
                        <input
                            label="Create Password"
                            placeholder="Create Password"
                            name="password"
                            id="password"
                            type="password"
                            ref={passwordRef}
                            required />
                        <input
                            label="Re-enter Password"
                            placeholder="Re-enter Password"
                            name="confirmPassword"
                            id="confirmPassword"
                            type="password"
                            ref={passwordConfirmRef}
                            required />
                    </div>
                    <button className="sign-up__button form__button" type="submit" disabled={loading}>Create Account</button>
                </form>
                <p className="sign-up__login">Already have an account? <Link to='/sign-in'>Log in</Link></p>
            </div>
        </section>
    )
}

export default SignUp

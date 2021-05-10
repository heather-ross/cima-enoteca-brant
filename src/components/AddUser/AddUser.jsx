import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './AddUser.scss';

const AddUser = () => {

    // const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();


    const { addUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await addUser(emailRef.current.value, passwordRef.current.value )
                // nameRef.current.value
            // addName(nameRef.current.value)
            // console.log(nameRef.current.value)
            setMessage('Success! New user created and logged in')
        } catch {
            setError('Failed to create account')
        }
        setLoading(false)
        e.target.reset();
    }

    return (
        <section className="add-menu">
            <h3 className="add-menu__title">Create a New User</h3>
            <form
                className="add-user__form"
                id="addUserForm"
                name="addUserForm"
                onSubmit={handleSubmit}>

                <div className="add-user__details">

                    <input
                        label="Email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        type="email"
                        ref={emailRef}
                        required />
                    {/* <input
                        label="Display Name"
                        placeholder="Display Name"
                        name="displayName"
                        id="displayName"
                        type="text"
                        ref={nameRef}
                        required /> */}
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
                    <p className="form-error">{error}</p>
                </div>
                <button
                    className="add-user__button form__button"
                    type="submit"
                    disabled={loading}>
                    Create Account
                </button>
                <p className="form-error">{message}</p>
            </form>
        </section>
    )
}

export default AddUser

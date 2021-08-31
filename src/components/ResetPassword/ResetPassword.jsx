import React, { useContext, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import './ResetPassword.scss';

const ResetPassword = () => {
    const emailRef = useRef();

    const { resetPassword } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Success! If the email address you entered is registered, you will receive an email with instructions to reset your password')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
        e.target.reset();
    }

    return (
        <>
            <section className="reset">
                <div className="reset__wrap">
                    <h2 className="reset__title">Reset Password</h2>
                    <form
                        className="reset__form"
                        id="resetForm"
                        name="resetForm"
                        onSubmit={handleSubmit}>
                        <div className="reset__details">
                            <input
                                label="Reset Password"
                                placeholder="Email"
                                name="email"
                                id="email"
                                type="email"
                                ref={emailRef}
                                required />

                        </div>

                        <button
                            className="reset__button form__button"
                            disabled={loading}>
                            Reset
                        </button>

                    </form>
                    <p className="reset__success">{message}{error}</p>
                    <p className="reset__login"> <Link to='/sign-in'>Back to Sign In</Link></p>
                </div>
            </section>
        </>
    )
}

export default ResetPassword


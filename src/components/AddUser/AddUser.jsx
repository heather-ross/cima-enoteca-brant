import React, { useContext, useRef, useState } from 'react';
// import { useAuth } from '../../contexts/AuthContext';
import { AuthContext } from '../../contexts/AuthContext';
import './AddUser.scss';

const AddUser = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { addUser, currentUser } = useContext(AuthContext);
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
            await addUser(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create account')
        }
            setLoading(false)
            e.target.reset();
    } 
    
    return (
        <section className="add-menu">
            <h3 className="add-menu__title">Create a New User</h3>
            {addUser}
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
                        {error && <p className="form-error">{error}</p>}
                        {currentUser}
                </div>
                <button 
                className="add-user__button form__button" 
                type="submit" 
                disabled={loading}
                >
                    Create Account
                    </button>
                {/* <p>{e, email, password}</p>
                {error && <p>error</p>} */}
            </form>
        </section>
    )
}

export default AddUser

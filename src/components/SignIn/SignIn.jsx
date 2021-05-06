import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './SignIn.scss';
import fire from '../../firebase';
import AdminHeader from '../../components/AdminHeader/AdminHeader';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()

    const login = (e) => {
        e.preventDefault();

        console.log(email)
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                // if (user) {
                    history.push('/dashboard')
                // }
                // console.log(user)
            }).catch((error) => {
                console.error(error);
            });
    }
    const validateForm = () => {
        return email.length > 4 && password.length > 5;
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
    }

    return (
        <>
            <AdminHeader />
            <section className="sign-in">
                <div className="sign-in__wrap">
                    <h2 className="sign-in__title">CIMA Sign In</h2>
                    <form
                        className="sign-in__form"
                        id="signInForm"
                        name="signInForm"
                        onSubmit={handleSubmit}>
                        <div className="sign-in__details">
                            <input
                                label="User Email"
                                placeholder="Enter email"
                                name="email"
                                type="email"
                                // value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input
                                label="Password"
                                placeholder="Password"
                                name="password"
                                type="password"
                                // value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button
                            className="sign-in__button form__button"
                            type="submit" 
                            disabled={!validateForm()}
                            onClick={(e) => login(e)}>
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